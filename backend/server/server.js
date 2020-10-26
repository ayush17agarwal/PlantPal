/* eslint-disable no-unused-vars */ // <-- ignore this line
const express = require('express');
// const db = require('./mysql/db');
const mongo = require('./mongodb/db');
// create db.js on your own since it has sensitive passwords!!!!!

const cors = require('cors');

//including the routes
// var user = require('./mysql/routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());

//user information
// app.use('/users', user);

//Server port and stuff. DON'T TOUCH!!!!!!
module.exports = app;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
