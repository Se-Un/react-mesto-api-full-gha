const jwt = require('jsonwebtoken');
const AuthError = require('../errors/AuthError');
const { KEY_SECRET } = require('../utils/constants');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError('Необходимо передать авторизацию'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, KEY_SECRET);
  } catch (err) {
    return next(new AuthError('Необходимо авторизоваться'));
  }
  req.user = payload;
  next();
};
