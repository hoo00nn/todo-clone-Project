const express = require('express');
const router = express.Router();
const user = require('../../services/user');

router.post('/signin', async (req, res) => {
  const isCorrectUser = await user.signin(req.body.username, req.body.password);
  if(isCorrectUser) {
    req.session.username = req.body.username;
    req.session.save();
    return res.status(200).json({ status : 'success' });
  }
  return res.status(400).json({ status : 'fail'} );
})

router.post('/signup', async (req, res) => {
  const isSignup = await user.signup(req.body.username, req.body.password);

  if (isSignup) return res.status(200).json({ status : 'success' });
  return res.status(400).json({ state : 'fail' });
})


module.exports = router;