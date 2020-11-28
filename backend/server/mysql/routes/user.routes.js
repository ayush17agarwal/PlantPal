const express = require('express');
const db = require('./../db');
var router = express.Router();

//request looks something like /signin?user=<username>&passwd=<password>
router.get('/signin', (req, res) => {
  let sql =
    'SELECT user_id, first_name FROM user WHERE username = ? AND passwd = MD5(?)';
  db.query(sql, [req.query.user, req.query.passwd], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
    console.log('User fetched...');
  });
});

//signup POST Request with email, username, name, password

router.post('/signup', (req, res) => {
  let sql =
    'INSERT INTO plantpal.user (first_name, last_name, email, username, passwd) VALUES(?, ?, ?, ?, MD5(?))';
  let {first_name, last_name, email, user, passwd} = req.body;

  db.query(
    sql,
    [first_name, last_name, email, user, passwd],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
      console.log('User created...');
    },
  );
});

//Update User Information POST Request (One for each field that is updateable)

// UPDATE plantpal.user SET username='blah' WHERE user_id = 1;

//return user information GET Request

// SELECT * FROM plantpal.user WHERE user_id = 2;

// advanced type of function (finds all plants that a user owns)

// SELECT plant_id, nickname FROM plantpal.garden NATURAL JOIN plantpal.plant WHERE user_id = 2

// advanced typ of function 2

// SELECT count(*), avg(health) FROM plantpal.plant GROUP BY garden_id;

//create a plant POST Request

//delete a plant DELETE Request

//return plant information GET Request

//water a plant POST Request

// SQL QUERIES - STAGE 4
//Find the number of plants and their average health for each garden: 
// SELECT count(*), avg(health) FROM plantpal.plant NATURAL JOIN plantpal.garden GROUP BY garden_id;

// Get email of every user who has garden in a specific climate
// SELECT email, count(*) FROM user JOIN garden ON user.userid=garden.gardenid WHERE garden.climate = <specify climate> GROUP BY email

module.exports = router;
