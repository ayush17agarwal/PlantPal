const express = require('express');
// eslint-disable-next-line no-unused-vars
const db = require('./mysql/db');

var user = require('./mysql/routes/user.routes');

const app = express();

app.use('/users', user);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
