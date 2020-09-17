const crypto = require('crypto');
const { User } = require('../models/user');

const signup = async (id, pw) => {
  pw = crypto.createHash('sha512').update(pw).digest('base64');
  const user = await User.findUser(id);

  if (user.length !== 0) return false;
  return await User.insertUser(id, pw);
}

const signin = async (id, pw) => {
  pw = crypto.createHash('sha512').update(pw).digest('base64');
  const isCorrect = await User.isCorrectUser(id, pw);
  return isCorrect.length !== 0 ? true : false;
}

module.exports = {
  signup,
  signin
}