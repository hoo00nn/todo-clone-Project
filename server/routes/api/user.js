const express = require('express');
const router = express.Router();
const user = require('../../services/user');
const message = require('../../utils/response-message');

router.post('/signin', async (req, res) => {
  const isCorrectUser = await user.signin(req.body.username, req.body.password);
  if(isCorrectUser) {
    req.session.username = req.body.username;
    req.session.save();
    return res.status(200).json({ status : 'success', message : message.successToLogin });
  }
  return res.status(400).json({ status : 'fail', message : message.failToLogin });
})

router.post('/signup', async (req, res) => {
  const isSignup = await user.signup(req.body.username, req.body.password);

  if (isSignup) return res.status(200).json({ status : 'success', message : message.successToSignup });
  return res.status(400).json({ state : 'fail', message : message.failToSignup });
})

router.post('/logout', async (req, res) => {
  req.session.destroy();
  res.status(201).json({ staus : 'success', message : message.successToLogout });
})


module.exports = router;