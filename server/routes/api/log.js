const express = require('express');
const router = express.Router();
const { logService } = require('../../services/log');
const { isLogined } = require('../../middleware/auth');

router.get('/', async (req, res) => {
  // const logList = await logService.getLogByID(req.session.username);
  const logList = await logService.getLogByID('test');
  if (logList) return res.status(200).json({ logList });
  return res.status(400).json({ status : 'fail' });
});

module.exports = router;