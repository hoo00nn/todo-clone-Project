const express = require('express');
const router = express.Router();

const board = require('./api/board');
const card = require('./api/card');
const user = require('./api/user');
const log = require('./api/log');

router.use('/board', board);
router.use('/card', card);
router.use('/user', user);
router.use('/log', log);

module.exports = router;