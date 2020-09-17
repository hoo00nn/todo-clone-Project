const express = require('express');
const router = express.Router();
const board = require('../../services/board');

router.get('/', async (req, res) => {
  const boardList = await board.getBoard();
  if (boardList) return res.status(200).json({ boardList });
  return res.status(400).json({ status : 'fail' });
});

module.exports = router;