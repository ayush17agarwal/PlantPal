const express = require('express');
const db = require('./../db');
var router = express.Router();

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
