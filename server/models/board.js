const { SqlExec } = require('./execute');
const query = require('./query');

const Board = {
  getBoard : async () => {
    const boardList = await SqlExec(query.getBoard, []);
    return boardList;
  },

  getBoardName : async (column_no) => {
    const name = await SqlExec(query.getBoardName, [column_no]);
    return name;
  },

  insertBoard : async (title) => {
    await SqlExec(query.insertBoard, [title]);
  },

  updateBoard : async (newTitle, title) => {
    await SqlExec(query.updateBoard, [newTitle, title]);
  },

  getCardByID : async (id) => {
    const cardList = await SqlExec(query.getCard, [id]);
    return cardList;
  },

  insertCard : async (data) => {
    const result = await SqlExec(query.insertCard, data);
    return result;
  },

  updateCard : async (data) => {
    return await SqlExec(query.updateCard, data);
  },

  deleteCard : async (title) => {
    return await SqlExec(query.deleteCard, [title]);
  }
}

module.exports = {
  Board
}