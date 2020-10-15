require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI; //need to create personal .env file
mongoose.connect(uri, {useNewURLParser: true, useCreateIndex: true}); //connect using key

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
