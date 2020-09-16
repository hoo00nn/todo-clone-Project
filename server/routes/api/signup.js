const express = require('express');
const router = express.Router();
const { USER } = require('../../models/user');

router.post('/', async (req, res) => {
  const user = await USER.findUser(req.body.username);

  if (user.length !== 0) return res.json({ status : 'fail' });
  USER.insertUser(req.body.username, req.body.password);
  return res.json({ state : 'success' });
})

module.exports = router;