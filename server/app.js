const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const sessionOption = require('./middleware/session');

const apiRouter = require('./routes/api');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionOption));
app.use(express.static(path.join(__dirname, '../client/src')));

app.use('/api', apiRouter);

module.exports = app;
