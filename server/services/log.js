const { Board } = require('../models/board');
const { Log } = require('../models/log');

const logService = {
  logByAdd: async (data) => {
    const state = 'added';
    const to = await Board.getBoardName(data.column_no);
    const message = `@${data.user_id} ${state} ${data.title} to ${to[0].title}`;
    const logData = [data.user_id, data.date, state, to[0].title, 'null', message, data.title];
    return await Log.insertLog(logData);
  },

  logByUpdate: async (data) => {
    const state = 'updated';
    const message = `@${data.user_id} ${state} ${data.title}`;
    const logData = [data.user_id, data.date, state, 'null', 'null', message, data.title];
    return await Log.insertLog(logData);
  },

  logByDelete: async (data) => {
    const state = 'deleted';
    const from = await Board.getBoardName(data.column_no);
    const message = `@${data.user_id} ${state} ${data.title} from ${from[0].title}`;
    const logData = [data.user_id, data.date, state, 'null', from[0].title, message, data.title];
    return await Log.insertLog(logData);
  },

  logByMove: () => {

  }
}

module.exports = {
  logService
}