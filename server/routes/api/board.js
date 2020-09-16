const express = require('express');
const router = express.Router();
const { Board } = require('../../models/board');

router.get('/', async (req, res) => {
  const boardList = await Board.getBoard();
  return res.json({ boardList });
})

module.exports = router;