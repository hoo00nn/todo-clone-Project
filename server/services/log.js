const { Board } = require('../models/board');
const { Log } = require('../models/log');

const logService = {
  logByAdd: async (data) => {
    const state = 'added';
    const to = await Board.getBoardName(data.column_no);
    const message = `@${data.user_id} ${state} ${data.title} to ${to[0].title}`;
    const logData = [data.user_id, state, to[0].title, null, message, data.title];
    return logData;
  },

  logByUpdate: async (data) => {
    const state = 'updated';
    const message = `@${data.user_id} ${state} ${data.title}`;
    const logData = [data.user_id, state, null, null, message, data.title];
    return logData;
  },

  logByDelete: async (data) => {
    const state = 'deleted';
    const from = await Board.getBoardName(data.column_no);
    const message = `@${data.user_id} ${state} ${data.title} from ${from[0].title}`;
    const logData = [data.user_id, state, null, from[0].title, message, data.title];
    return logData;
  },

  logByMove: async (previousCard, column) => {
    const state = 'moved';
    const from = await Board.getBoardName(previousCard.column_no);
    const to = await Board.getBoardName(column);
    let message = '';
    if (from[0].title === to[0].title) {
      message = `@${previousCard.user_id} ${state} the column ${from[0].title}`;
    } 
    else {
      message = `@${previousCard.user_id} ${state} ${previousCard.title} from ${from[0].title} to ${to[0].title}`;
    }
    const logData = [previousCard.user_id, state, to[0].title, from[0].title, message, previousCard.title];
    return logData;
  },

  getLogByID: async (id) => {
    return await Log.getLogByID(id);
  }
}

module.exports = {
  logService
}