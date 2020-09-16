const { SqlExec } = require('./execute');
const query = require('./query');

const Board = {
  getBoard : async () => {
    const boardList = await SqlExec(query.getBoard, []);
    return boardList;
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
  },

  updateCard : async (data) => {

  },

  deleteCard : async (title) => {
    await SqlExec(query.deleteCard, [title]);
  }
}

module.exports = {
  Board
}