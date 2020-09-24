const { Board } = require('../models/board');

const getBoard = async () => {
  return await Board.getBoard();
}

const updateBoard = async (data) => {
  const boardData = [data.title, data.column_no];
  return await Board.updateBoard(boardData);
}

module.exports = {
  getBoard,
  updateBoard
}