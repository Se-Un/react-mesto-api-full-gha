const jwt = require('jsonwebtoken');
const AuthError = require('../errors/AuthError');
const { KEY_SECRET } = require('../utils/constants');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new AuthError('Необходимо передать авторизацию'));
  }

  let payload;
  try {
    payload = jwt.verify(token, KEY_SECRET);
  } catch (err) {
    return next(new AuthError('Необходимо авторизоваться'));
  }
  req.user = payload;
  next();
};
