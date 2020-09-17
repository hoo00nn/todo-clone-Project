const { Card } = require('../models/card');
const { logService } = require('../services/log');

const insertCard = async (data) => {
  const cardData = [data.title, data.content, data.user_id, data.column_no];
  const logData = await logService.logByAdd(data);
  const insertCard = await Card.insertCard(cardData, logData);
  return insertCard;
}

const getCardByID = async (id) => {
  return await Board.getCardByID(id);
}

const deleteCard = async (data) => {
  const logData = await logService.logByDelete(data);
  const deleteCard = await Card.deleteCard(data.card_no, logData); 
  return deleteCard;
}

const updateCard = async (data) => {
  const cardData = [data.title, data.content, data.column_no, data.card_no];
  const logData = await logService.logByUpdate(data);
  const updateCard = await Card.updateCard(cardData, logData);
  return updateCard
}

module.exports = {
  insertCard,
  getCardByID,
  deleteCard,
  updateCard
}