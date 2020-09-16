const express = require('express');
const router = express.Router();

const signup = require('./api/signup');
const signin = require('./api/signin');
const board = require('./api/board');
const card = require('./api/card');

router.use('/signup', signup);
router.use('/signin', signin);
router.use('/board', board);
router.use('/card', card);

module.exports = router;