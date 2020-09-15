const express = require('express');
const router = express.Router();

const signup = require('./signup');
const board = require('./board');

router.use('/signup', signup);
router.use('/board', board);

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
