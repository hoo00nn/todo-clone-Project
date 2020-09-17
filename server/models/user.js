const crypto = require('crypto');
const query = require('./query');
const { SqlExec } = require('./execute');

const User = {
  insertUser : async (id, pw) => {
    return await SqlExec(query.insertUser, [id, pw]);
  },

  findUser: async (id) => {
    return await SqlExec(query.findUser, [id]);
  },

  isCorrectUser: async (id, pw) => {
    return await SqlExec(query.isCorrectUser, [id, pw]);
  }
}

module.exports = {
  User
}