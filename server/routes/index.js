const express = require('express');
const router = express.Router();

const signup = require('./signup');

router.use('/signup', signup);

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
