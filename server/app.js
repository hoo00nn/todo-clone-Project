const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const engines = require('consolidate');

const indexRouter = require('./routes/index');

// 뷰 경로 설정
app.set('views', path.join(__dirname, '../client/views'));
// 뷰 엔진을 html로 설정
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/', indexRouter);

module.exports = app;
