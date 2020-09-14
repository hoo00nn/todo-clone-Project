const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path : path.join(__dirname, '../.env') });
 
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


