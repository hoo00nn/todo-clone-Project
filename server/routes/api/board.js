const express = require('express');
const router = express.Router();
const board = require('../../services/board');

router.get('/', async (req, res) => {
  const boardList = await board.getBoard();
  if (boardList) return res.state(200).json({ boardList });
  return res.state(400).json({ status : 'fail' });
});

module.exports = router;