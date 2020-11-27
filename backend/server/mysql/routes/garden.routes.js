const express = require('express');
const db = require('./../db');
var router = express.Router();

//create new garden POST Request with x fields
router.post('/create', (req, res) => {
  let sql = 'INSERT INTO garden(user_id, garden_name, climate) VALUES(?, ?, ?)';
  let {user_id, garden, climate} = req.body;

  db.query(sql, [user_id, garden, climate], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
    console.log('Garden created...');
  });
});

//delete a garden DELETE Request with garden name

router.delete('/remove', (req, res) => {
  let sql = 'DELETE FROM garden WHERE garden_name = ?';
  let garden_name = req.body.garden_name;

  db.query(sql, [garden_name], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
    console.log('Garden deleted...');
  });
});

//return all gardens for a user
router.get('', (req, res) => {
  let sql = 'SELECT * FROM garden JOIN (SELECT user_id FROM user WHERE username = ?) AS users' + 
            'ON garden.user_id = users.user_id';
  let username = req.query.username;

  db.query(sql, [username], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
    console.log('Gardens fetched...');
  });
});

//edit garden name
router.post('/change-name', (req, res) => {
  let sql = 'UPDATE garden SET garden_name = ?' + 
            'WHERE user_id IN (SELECT user_id FROM user WHERE username = ?)';
  let {garden_name, username} = req.body;

  db.query(sql, [garden_name, username], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
    console.log('Updated garden...');
  });
});

// router.get('/identify-climate', (req,res) => {
//   let sql =
//     'SELECT email, count(*) FROM user NATURAL JOIN garden WHERE climate = ? GROUP BY email';

//   db.query(sql, [req.query.climate], (err, results) => {
//     if(err) {
//       throw err;
//     }
//     res.send(results);
//     console.log('fetched emails with gardens of climate ' + req.query.climate);
//   })
// })

router.get('/num-gardens', (req,res) => {
  let sql = 'SELECT count(*) FROM garden NATURAL JOIN user WHERE username = ? GROUP BY garden.user_id'
})

module.exports = router;
