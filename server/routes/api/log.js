const express = require('express');
const router = express.Router();
const { logService } = require('../../services/log');

router.get('/', async (req, res) => {
  const logList = await logService.getLogByID(req.session.username);
  if (logList) return res.status(200).json({ logList });
  return res.status(400).json({ status : 'fail' });
});

module.exports = router;