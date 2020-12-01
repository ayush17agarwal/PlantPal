const express = require('express');
const db = require('./../db');
var router = express.Router();

//request looks something like /signin?user=<username>&passwd=<password>
router.get('/signin', (req, res) => {
  let sql =
    'SELECT username FROM user WHERE username = ? AND passwd = MD5(?)';
  db.query(sql, [req.query.user, req.query.passwd], (err, results) => {
    if (err) {
      // res.status(400).json('Error' + err);
      return res.send({success: false, results: results});  //throw err;
    } else {
      res.send({success: true, results: results});
      console.log('User fetched...');
    }
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

router.get('/user-info', (req, res) => {
  let sql =
    'SELECT * FROM user WHERE username = ?';
  db.query(sql, [req.query.user], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
    console.log('User fetched...');
  });
});

router.post('/update-username', (req, res) => {
  let sql = 'UPDATE user SET username = ? WHERE username = ?';
  const {curr_username, new_username} = req.body;
  db.query(sql, [new_username, curr_username], (err, results) => {
    if(err) throw err;
    res.send(results);
    console.log('Updated username');
  })
});

router.post('/update-bio', (req, res) => {
  let sql = 'UPDATE user SET biography = ? WHERE username = ?';
  const {username, biography} = req.body;
  db.query(sql, [biography, username], (err, results) => {
    if(err) throw err;
    res.send(results);
    console.log('Updated bio');
  })
});

router.post('/update-email', (req, res) => {
  let sql = 'UPDATE user SET email = ? WHERE username = ?';
  const {email, username} = req.body;
  db.query(sql, [email, username], (err, results) => {
    if(err) throw err;
    res.send(results);
    console.log('Updated email');
  })
});

router.post('/update-password', (req, res) => {
  let sql = 'UPDATE user SET password = ? WHERE username = ?';
  const {password, username} = req.body;
  db.query(sql, [password, username], (err, results) => {
    if(err) throw err;
    res.send(results);
    console.log('Updated password');
  })
});

router.get('/all-gardens-and-plants', (req, res) => {
  const {username} = req.query;
  let sql = 'SELECT * FROM garden NATURAL JOIN plant ' + 
          'WHERE user_id IN (SELECT user_id FROM user WHERE username = ?)';
  db.query(sql, [username], (err, results) => {
    if(err) return res.status(400).json('Error: ' + err);

    res.send(results);
    console.log('Fetched all gardens and plants for ' + username);
  })
})

module.exports = router;
