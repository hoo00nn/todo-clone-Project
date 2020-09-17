const { SqlExec } = require('./execute');
const query = require('./query');

const Log = {
  getLog: async () => {
    const logList = await SqlExec(query.getLog, []);
    return logList;
  },

  insertLog: async (data) => {
    return await SqlExec(query.insertLog, data);
  }
}

module.exports = {
  Log
}