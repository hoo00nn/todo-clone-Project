const express = require('express');
const router = express.Router();
const { USER } = require('../../models/user');

router.post('/', async (req, res) => {
  const isCorrectUser = await USER.isCorrectUser(req.body.username, req.body.password);
  if(isCorrectUser) return res.json({ status : 'success' });
  return res.json({ status : 'fail'} );
})

module.exports = router;