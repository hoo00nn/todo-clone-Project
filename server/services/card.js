const { Board } = require('../models/board');
const { logService } = require('../services/log');

const insertCard = async (data) => {
  const cardData = [data.title, data.content, data.user_id, data.column_no];
  const logData = await logService.logByAdd(data);
  const insertCard = await Board.insertCard(cardData, logData);
  if(insertCard) return true;
  return false;
}

const getCardByID = async (id) => {
  return await Board.getCardByID(id);
}

const deleteCard = async (data) => {
  const logData = await logService.logByDelete(data);
  const deleteCard = await Board.deleteCard(data.card_no, logData); 
  if(deleteCard) return true;
  return false;
}

const updateCard = async (data) => {
  const cardData = [data.title, data.content, data.column_no, data.card_no];
  const logData = await logService.logByUpdate(data);
  const updateCard = await Board.updateCard(cardData, logData);
  if(updateCard) return true;
  return false;
}

module.exports = {
  insertCard,
  getCardByID,
  deleteCard,
  updateCard
}