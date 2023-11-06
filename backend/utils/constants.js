const {
  PORT = 3000,
  MONGO_PATH = 'mongodb://127.0.0.1:27017/mestodb',
  JWT_SECRET = 'efc8864c9722cc9f02b5e91c1b0dd98fb82907fcc23c16b7f2e6ef815f2cccf3',
  NODE_ENV,
} = process.env;

const ALLOWED_CORS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://mestoks.nomoredomainsmonster.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  PORT,
  MONGO_PATH,
  NODE_ENV,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
  JWT_SECRET,
};
