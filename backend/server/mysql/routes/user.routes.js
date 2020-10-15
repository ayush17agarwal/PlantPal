const express = require('express');
const db = require('./../db');
var router = express.Router();

// experimental API call. Feel free to use it
// as boilerplate code for any other routes!
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM user';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
    console.log('Users fetched...');
  });
});

module.exports = router;
