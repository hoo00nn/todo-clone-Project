const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const sessionOption = require('./middleware/session');
const cors = require('cors');
const apiRouter = require('./routes/api');
require('dotenv').config({ path : path.join(__dirname, './.env') });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionOption));
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(cors({ origin : process.env.ORIGIN, credentials : true }));

app.use('/api', apiRouter);

module.exports = app;
