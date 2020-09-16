const path = require('path');
require('dotenv').config({ path : path.join(__dirname, '../.env') });

module.exports = {
  HttpOnly: true,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24000 * 60 * 60 }
}