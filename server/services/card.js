const { Board } = require('../models/board');

const insertCard = async (data) => {
  const date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
  const cardInfo = [data.title, data.content, data.id, data.column_no, date];
  Board.insertCard(cardInfo);
}

module.exports = {
  insertCard
}