const message = require('../utils/response-message');

const isLogined = (req, res, next) => {
  if(!req.session.user) {
    return res.status(403).json({ status : 'fail', message : message.requiredLogin });
  }
  next();
}

module.exports = {
  isLogined
}

