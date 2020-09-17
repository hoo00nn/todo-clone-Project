const query = require('./query');
const { SqlExec } = require('./execute');

const User = {
  insertUser : async (id, pw) => {
    const result = await SqlExec(async (conn) => {
      try {
        await conn.query(query.insertUser, [id, pw]);
        await conn.commit();
        return true;
      } 
      catch(err) {
        console.log('Query Error');
        await conn.rollback();
        return false;
      } 
      finally {
        conn.release();
      }
    })
    return result;
  },

  findUser: async (id) => {
    const result = await SqlExec(async (conn) => {
      try {
        const [ user ] = await conn.query(query.findUser, [id]);
        await conn.commit();
        return user;
      } 
      catch(err) {
        console.log('Query Error');
        await conn.rollback();
        return false;
      } 
      finally {
        conn.release();
      }
    })
    return result;
  },

  isCorrectUser: async (id, pw) => {
    const result = await SqlExec(async (conn) => {
      try {
        const [ isCorrect ] = await conn.query(query.isCorrectUser, [id, pw]);
        await conn.commit();
        return isCorrect;
      } 
      catch(err) {
        console.log('Query Error');
        await conn.rollback();
        return false;
      } 
      finally {
        conn.release();
      }
    })
    return result;
  }
}

module.exports = {
  User
}