const { Board } = require('../models/board');
const { logService } = require('../services/log');

const insertCard = async (data) => {
  data.date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
  const cardInfo = [data.title, data.content, data.user_id, data.column_no, data.date];
  const insertCard = await Board.insertCard(cardInfo);
  const addLog = await logService.logByAdd(data);
  if(addLog && insertCard) return true;
  return false;
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
  data.date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
  const updateInfo = [data.title, data.content, data.column_no, data.date, data.card_no];
  const updateCard = await Board.updateCard(updateInfo);
  const logByUpdate = await logService.logByUpdate(data);
  if(updateCard && logByUpdate) return true;
  return false;
}

module.exports = {
  insertCard,
  getCardByID,
  deleteCard,
  updateCard
}