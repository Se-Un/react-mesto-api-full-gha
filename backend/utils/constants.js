const PORT = process.env.PORT || 3000;
const { MONGO_PATH } = process.env;

const ALLOWED_CORS = [
  'http://localhost:3000',
  'http://localhost:3001',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
const KEY_SECRET = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'key';

module.exports = {
  PORT,
  MONGO_PATH,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
  KEY_SECRET,
};
