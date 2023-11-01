/* eslint-disable no-console */
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { PORT, MONGO_PATH } = require('./utils/constants');
const auth = require('./middlewares/auth');
const { validationLogin, validationCreateUser } = require('./middlewares/validation');
const { login, createUser } = require('./controllers/user');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');

const app = express();

app.use(bodyParser.json());

mongoose.connect(MONGO_PATH);

app.use(cors);

app.use(requestLogger);

app.post('/signin', validationLogin, login);
app.post('/signup', validationCreateUser, createUser);
app.use(auth);
app.use('/', require('./routes/index'));

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Ошибка по умолчанию' : message,
  });
  next();
});

app.listen(PORT, () => console.log('The server is running on:', PORT));
