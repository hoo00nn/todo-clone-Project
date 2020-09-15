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
  }
}

module.exports = {
  USER
}