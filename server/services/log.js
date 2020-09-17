const { Board } = require('../models/board');

const logService = {
  logByAdd: async (data) => {
    const state = 'added';
    const to = await Board.getBoardName(data.column_no);
    const message = `@${data.user_id} ${state} ${data.title} to ${to[0].title}`;
    const logData = [data.user_id, state, to[0].title, 'null', message, data.title];
    return logData;
  },

  logByUpdate: async (data) => {
    const state = 'updated';
    const message = `@${data.user_id} ${state} ${data.title}`;
    const logData = [data.user_id, state, 'null', 'null', message, data.title];
    return logData;
  },

  logByDelete: async (data) => {
    const state = 'deleted';
    const from = await Board.getBoardName(data.column_no);
    const message = `@${data.user_id} ${state} ${data.title} from ${from[0].title}`;
    const logData = [data.user_id, state, 'null', from[0].title, message, data.title];
    return logData;
  },

  logByMove: () => {

  }
}

module.exports = {
  logService
}