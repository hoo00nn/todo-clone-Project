const express = require('express');
const router = express.Router();
const board = require('../../services/board');
const { isLogined } = require('../../middleware/auth');

router.get('/', isLogined, async (req, res) => {
  const boardList = await board.getBoard();
  if (boardList) return res.status(200).json({ boardList });
  return res.status(400).json({ status : 'fail' });
});

router.put('/', isLogined, async (req, res) => {
  console.log(req.body);
  const updateBoard = await board.updateBoard(req.body);
  if (updateBoard) return res.status(200).json({ status : 'success' });
  return res.status(400).json({ status : 'fail' });
});

module.exports = router;