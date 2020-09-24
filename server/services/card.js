const { Card } = require('../models/card');
const { logService } = require('../services/log');

const insertCard = async (data) => {
  const maxCountCardByColumn = await Card.getMaxCountCardByColumn(data.column_no, data.user_id);
  const cardData = [data.title, data.content, data.user_id, data.column_no, maxCountCardByColumn+1];
  const logData = await logService.logByAdd(data);
  const insertCard = await Card.insertCard(cardData, logData);
  return insertCard;
}

const getCardByID = async (id) => {
  return await Card.getCardByID(id);
}

const deleteCard = async (data) => {
  const orderUpdateData = [data.card_order, data.user_id, data.column_no];
  const logData = await logService.logByDelete(data);
  const deleteCard = await Card.deleteCard(data.card_no, orderUpdateData, logData);
  return deleteCard;
}

const updateCard = async (data) => {
  const cardData = [data.title, data.content, data.column_no, data.card_no];
  const logData = await logService.logByUpdate(data);
  const updateCard = await Card.updateCard(cardData, logData);
  return updateCard
}

const updateCardByMove = async (data) => {
  let orderCount = 1;
  const logData = await logService.logByMove(data.previousCard, data.column);
  Card.updateCardByMove(null, logData);
  for (const item of data.orderList) {
    Card.updateCardByMove([orderCount, data.column, item], logData);
    orderCount++;
  }
  return true;
}

module.exports = {
  insertCard,
  getCardByID,
  deleteCard,
  updateCard,
  updateCardByMove
}