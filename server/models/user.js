const crypto = require('crypto');
const query = require('./query');
const { SqlExec } = require('./execute');

const USER = {
  insertUser : async (id, pw) => {
    pw = crypto.createHash('sha512').update(pw).digest('base64');
    SqlExec(query.insertUser, [id, pw]);
  },

  findUser: async (id) => {
    const user = await SqlExec(query.findUser, [id]);
    return user;
  },

  isCorrectUser: async (id, pw) => {
    pw = crypto.createHash('sha512').update(pw).digest('base64');
    const isCorrect = await SqlExec(query.isCorrectUser, [id, pw]);
    return isCorrect.length !== 0 ? true : false;
  }
}

module.exports = {
  USER
}