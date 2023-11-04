const PORT = process.env.PORT || 3000;
const MONGO_PATH = process.env.MONGO_PATH || 'mongodb://127.0.0.1:27017/mestodb';
const NODE_ENV = process.env.NODE_ENV || 'production';

const ALLOWED_CORS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://mestoks.nomoredomainsmonster.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
const KEY_SECRET = NODE_ENV === 'production' ? process.env.JWT_SECRET : 'key-secret';

module.exports = {
  PORT,
  MONGO_PATH,
  NODE_ENV,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
  KEY_SECRET,
};
