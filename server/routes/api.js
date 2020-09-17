const express = require('express');
const router = express.Router();

const board = require('./api/board');
const card = require('./api/card');
const user = require('./api/user');

router.use('/board', board);
router.use('/card', card);
router.use('/user', user);

module.exports = router;