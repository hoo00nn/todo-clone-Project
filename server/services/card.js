const { Board } = require('../models/board');

const insertCard = async (data) => {
  const date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
  const cardInfo = [data.title, data.content, data.user_id, data.column_no, date];
  return await Board.insertCard(cardInfo);
}

const getCardByID = async (id) => {
  return await Board.getCardByID(id);
}

const deleteCard = async (card_no) => {
  const result = await Board.deleteCard(card_no);
  if(result.affectedRows === 0) return false;
  return true;
}

const updateCard = async (data) => {
  const date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
  const updateInfo = [data.title, data.content, data.column_no, date, data.card_no];
  return await Board.updateCard(updateInfo);
}

module.exports = {
  insertCard,
  getCardByID,
  deleteCard,
  updateCard
}