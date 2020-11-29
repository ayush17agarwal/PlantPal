const express = require('express');
const db = require('./../db');
const fetch = require('node-fetch');
require('dotenv').config();

var router = express.Router();

router.get('/health-per-garden', (req,res) => {
    let sql = 
        'SELECT count(*), avg(health) FROM plant NATURAL JOIN garden GROUP BY garden.garden_id';

    db.query(sql, (err, results) => {
    if (err) {
      res.status(400).json('Error: ' + err);
    }
    res.send(results);
    console.log('health fetched...');
  });
});

router.get('', (req, res) => {
  const {plant_id} = req.query;

  let sql = 'SELECT * FROM plant WHERE plant_id = ?';
  db.query(sql, plant_id, (err, results) => {
    res.send(results);
    console.log('Fetched plant');
  });
});

router.get('/search', (req, res) => {
    const token = process.env.TREFLE_TOKEN;
    const search = req.query.common;
    (async () => {
        const response = await fetch('https://trefle.io/api/v1/plants/search?token=' + token + '&q=' + search);
        const json = await response.json();
        res.send(json);
      })();
});

router.get('/plants-by-garden', (req, res) => {
  const {garden_name, username} = req.query;

  let sql = 'SELECT * FROM plant WHERE garden_name = ? AND user_id IN (SELECT user_id FROM user WHERE username = ?)';

  db.query(sql, [garden_name, username], (err, results) => {
    if(err) res.status(400).json('Error: ' + err);

    res.send(results);
    console.log('Got plants for ' + username + ' ' + garden_name + ' garden...');
  });
});

router.post('/add', (req, res) => {
  const trefle_id = req.body.trefle_id;
  const garden_name = req.body.garden_name;
  const username = req.body.username;
  const common_name = req.body.common_name;
  let num_plant = 0;
  let user_id = '';

  db.query('SELECT user_id FROM user WHERE username = ?', username, (err, results) => {
    user_id = results[0].user_id;
  });
  
  let exists_plant = 'SELECT COUNT(*) AS numPlant FROM trefle_info WHERE trefle_id = ?';
  db.query(exists_plant, trefle_id, (err, results) => {
    num_plant = results[0].numPlant;
      if(num_plant > 0) {
        let insert_plant = 'INSERT INTO plant(garden_name, trefle_id, user_id, common_name, date_planted, last_date_watered)' +
                            'VALUES(?, ?, ?, ?, CURDATE(), CURDATE())';
        db.query(insert_plant, [garden_name, trefle_id, user_id, common_name], (err, results) => {
                if(err) res.status(400).json('Error: ' + err);
                
                console.log('Added the plant...');
                res.send('success');
              });
      }
      else {

        const token = process.env.TREFLE_TOKEN;
        (async () => {
            const response = await fetch('https://trefle.io/api/v1/plants/' + trefle_id + '?token=' + token);
            const json = await response.json();
            const scientific_name = json.data.scientific_name;
            const common_trefle = json.data.common_name;
            let insert_trefle = 'INSERT INTO trefle_info(trefle_id, common_name, scientific_name) VALUES(?, ?, ?)';
            db.query(insert_trefle, [trefle_id, common_trefle, scientific_name], (err, results) => {
              let insert_plant = 'INSERT INTO plant(garden_name, trefle_id, user_id, common_name, date_planted, last_date_watered)' +
                            'VALUES(?, ?, ?, ?, CURDATE(), CURDATE())';

              db.query(insert_plant, [garden_name, trefle_id, user_id, common_name], (err, results) => {
                if(err) res.status(400).json('Error: ' + err);
                
                console.log('Added the ******* plant...');
                res.send('success');
              });
            })
          })();
      }
  });
});

router.delete('/remove', (req, res) => {
  let sql = 'DELETE FROM plant WHERE plant_id = ?';
  let plant_id = req.body.plant_id

  db.query(sql, [plant_id], (err, results) => {
    if (err) {
      res.status(400).json('Error: ' + err);
    }
    res.send(results);
    console.log('Plant deleted...');
  });
});

router.post('/nickname', (req, res) => {
  let sql = 'UPDATE plant SET nickname = ? WHERE plant_id = ?';
  const {nickname, plant_id} = req.body;
  db.query(sql, [nickname, plant_id], (err, results) => {
    if(err) res.status(400).json('Error: ' + err);

    res.send(results);
    console.log('updated nickname');
  });
});

router.post('/water', (req, res) => {
  let sql = 'UPDATE plant SET date_last_watered = CURDATE() WHERE plant_id = ?';
  const {plant_id} = req.body;

  db.query(sql, plant_id, (err, results) => {
    if(err) res.status(400).json('Error: ' + err);
    res.send(results);
    console.log('updated date_last_watered');
  });

  let sql2 = 'UPDATE plant SET health = CASE WHEN health * 1.15 >= 100 THEN 100 ELSE health * 1.15 END WHERE plant_id = ?';
  db.query(sql2, plant_id, (err, results) => {
    if(err) res.status(400).json('Error: ' + err);

    console.log('added health for watering :)');
  });
});

router.get('/num-plants', (req, res) => {
  let sql = 'SELECT COUNT(*) AS num_plants FROM plant NATURAL JOIN user WHERE username = ? GROUP BY plant.user_id';
  const {username} = req.query;

  db.query(sql, username, (err, results) => {
    if(err) res.status(400).json('Error: ' + err);

    res.send(results[0]);
    console.log('fetched number of plants');
  });
});

router.post('/health', (req, res) => {
  let sql = 'UPDATE plant SET health = ((12 - (CURDATE() - date_last_watered))/12) * 100 WHERE user_id IN (SELECT user_id FROM user WHERE username=?);';
  const {username} = req.query;

  db.query(sql, username, (err, results) => {
    if(err) res.status(400).json('Error: ' + err);

    res.send(results);
    console.log('Depleted health of plants...');
  });  
});


//TODO algorithm to determine plant relationships

module.exports = router;