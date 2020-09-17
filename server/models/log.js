const { SqlExec } = require('./execute');
const query = require('./query');

const Log = {
  getLogByID: async (id) => {
    const result = await SqlExec(async (conn) => {
      try {
        const [ logList ] = await conn.query(query.getLog, [id]);
        await conn.commit();
        return logList;
      } catch(err) {
        console.log('Query Error');
        await conn.rollback();
        return false;
      } finally {
        conn.release();
      }
    })
    return result;
  }
}

module.exports = {
  Log
}