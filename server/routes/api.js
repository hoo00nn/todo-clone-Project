const express = require('express');
const router = express.Router();

const signup = require('./api/signup');
const signin = require('./api/signin');

router.use('/signup', signup);
router.use('/signin', signin);

module.exports = router;