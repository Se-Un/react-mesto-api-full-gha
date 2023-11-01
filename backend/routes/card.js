const cardRouters = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/card');

const {
  validationCreateCard,
  validationCardId,
} = require('../middlewares/validation');

cardRouters.get('/', getCards);
cardRouters.post('/', validationCreateCard, createCard);
cardRouters.delete('/:cardId', validationCardId, deleteCard);
cardRouters.put('/:cardId/likes', validationCardId, likeCard);
cardRouters.delete('/:cardId/likes', validationCardId, dislikeCard);

module.exports = cardRouters;
