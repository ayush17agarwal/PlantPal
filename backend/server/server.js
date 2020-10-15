const express = require('express');
// eslint-disable-next-line no-unused-vars
const db = require('./mysql/db');
// create db.js on your own since it has sensitive passwords!!!!!

//including the routes
var user = require('./mysql/routes/user.routes');

const app = express();

//user information
app.use('/users', user);

//Server port and stuff. DON'T TOUCH!!!!!!
module.exports = app;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
