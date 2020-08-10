const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/plants_db';

mongoose.connect(`${DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on('error', err => console.log(err)); //eslint-disable-line

module.exports = mongoose;