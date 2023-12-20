const mongoose = require('mongoose');
require('dotenv').config();

const conn = () => {
  mongoose.connect(process.env.MONGO_URI);
  mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });
}

module.exports = conn