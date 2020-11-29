

const express = require('express');
const db = require('./../db');
var router = express.Router();

//create new garden POST Request with x fields
router.post('/create', (req, res) => {
  let sql = 'INSERT INTO garden(user_id, garden_name, climate) VALUES(?, ?, ?)';
  let sql2 = 'SELECT user_id FROM user where username = ?';
  let {username, garden, climate} = req.body;

  db.query(sql2, [username], (err, results) => {
    const user_id = results[0].user_id;
    db.query(sql, [user_id, garden, climate], (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
      console.log('Garden created...');
    });
  });
});

//delete a garden DELETE Request with garden name

router.delete('/remove', (req, res) => {
  let sql0 = 'DELETE FROM plant WHERE garden_name = ? AND user_id IN (SELECT user_id FROM user WHERE username = ?)'
  let sql = 'DELETE FROM garden WHERE garden_name = ? AND user_id IN (SELECT user_id FROM user WHERE username = ?)';
  let garden_name = req.body.garden_name;
  let username = req.body.username

  db.query(sql0, [garden_name, username], (err, results) => {
    if(err) return res.status(400).json('Error: ' + err);
    db.query(sql, [garden_name, username], (err1, results1) => {
        if (err1) {
          return res.status(400).json('Error: ' + err1);
        }
        res.send(results1);
        console.log('Garden deleted...');
    });
  });
});

//return all gardens for a user
router.get('', (req, res) => {
  let sql = 'SELECT * FROM garden JOIN (SELECT user_id FROM user WHERE username = ?) AS users ' + 
            'ON garden.user_id = users.user_id';
  let username = req.query.username;

  db.query(sql, [username], (err, results) => {
    if (err) {
      return res.status(400).json('Error: ' + err);
    }
    res.send(results);
    console.log('Gardens fetched...');
  });
});

//edit garden name
router.post('/change-name', (req, res) => {
  let sql = 'UPDATE garden SET garden_name = ?' + 
            'WHERE user_id IN (SELECT user_id FROM user WHERE username = ?) AND garden_name = ?';
  let {garden_name, username, new_name} = req.body;

  db.query(sql, [new_name, username, garden_name], (err, results) => {
    if (err) {
      return res.status(400).json('Error: ' + err);
    }
    res.send(results);
    console.log('Updated garden...');
  });
});

router.get('/identify-climate', (req,res) => {
  let sql =
    'SELECT email, count(*) FROM user NATURAL JOIN garden WHERE climate = ? GROUP BY email';

  db.query(sql, [req.query.climate], (err, results) => {
    if(err) {
      return res.status(400).json('Error: ' + err);
    }
    res.send(results);
    console.log('fetched emails with gardens of climate ' + req.query.climate);
  })
})

router.get('/num-gardens', (req,res) => {
  let sql = 'SELECT COUNT(*) AS num_gardens FROM garden NATURAL JOIN user ' + 
          'WHERE username = ? GROUP BY garden.user_id';
  const {username} = req.query;
  
  db.query(sql, username, (err, results) => {
    if(err) return res.status(400).json('Error: ' + err);
     
    res.send(results[0]);
    console.log('fetched number of gardens');
  })
});

module.exports = router;
