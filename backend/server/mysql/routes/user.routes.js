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

//signin GET Request with username and password

//SELECT user_id, first_name FROM plantpal.User WHERE username = 'djfakl;djf' AND passwd = MD5('adklfja');

//signup POST Request with email, username, name, password

// INSERT INTO plantpal.user (first_name, last_name, email, username, passwd) VALUES('Jo', 'last', 'balkja', 'djfakl;djf', MD5('adklfja'));

//create new garden POST Request with x fields

// INSERT INTO plantpal.garden(user_id, garden_name, climate) VALUES(1, 'desktop', 'dry');

//delete a garden DELETE Request with garden name

// DELETE FROM plantpal.garden WHERE garden_id = 2;

//return all gardens for a user

//SELECT * FROM plantpal.garden WHERE user_id = 1;

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

module.exports = router;
