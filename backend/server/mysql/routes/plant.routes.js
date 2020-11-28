const express = require('express');
const db = require('./../db');
var router = express.Router();

router.get('/health-per-garden', (req,res) => {
    let sql = 
        'SELECT count(*), avg(health) FROM plant NATURAL JOIN garden GROUP BY garden.garden_id';

    db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
    console.log('health fetched...');
  });
})

module.exports = router;