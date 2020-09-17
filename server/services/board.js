const { Board } = require('../models/board');

const getBoard = async () => {
  return await Board.getBoard();
}

module.exports = {
  getBoard
}