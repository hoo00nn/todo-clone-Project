const express = require('express');
const router = express.Router();
const { Board } = require('../../models/board');
const Card = require('../../services/card');
const card = require('../../services/card');

router.get('/', async (req, res) => {
  const cardList = await Board.getCardByID('test');
  return res.json({ cardList });
})

router.post('/add', async(req, res) => {
   card.insertCard(req.body);
})

module.exports = router;