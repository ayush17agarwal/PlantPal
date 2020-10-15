require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewURLParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
