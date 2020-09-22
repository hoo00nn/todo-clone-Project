const express = require('express');
const router = express.Router();
const card = require('../../services/card');
const { isLogined } = require('../../middleware/auth');

router.get('/', async (req, res) => {
  const cardList = await card.getCardByID('test');

  if(cardList) return res.status(200).json({ cardList });
  return res.status(400).json({ status : 'fail' });
});

router.post('/', async (req, res) => {
  req.body.user_id = 'test';
   const result = await card.insertCard(req.body);

   if (result) return res.status(201).json({ status : 'success' });
   return res.status(400).json({ status : 'fail' });
});

router.delete('/', async (req, res) => {
  const result = await card.deleteCard(req.body);

  if (result) return res.status(200).json({ status : 'success' });
  return res.status(400).json({ status : 'fail' });
});

router.patch('/', isLogined, async (req, res) => {
  const result = await card.updateCard(req.body);
  
  if (result) return res.status(200).json({ status : 'success' });
  return res.status(400).json({ status : 'fail' });
})

module.exports = router;