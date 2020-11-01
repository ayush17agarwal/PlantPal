const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  database: 'PlantPal',
  password: 'covid-19',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected Successfully!');
});

module.exports = connection;
