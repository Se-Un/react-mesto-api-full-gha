const userRouters = require('express').Router();
const {
  getUsers,
  getUserById,
  updateUser,
  updateAvatar,
  getCurrentUser,
} = require('../controllers/user');

const {
  validationUpdateUser,
  validationUpdateAvatar,
  validationUserId,
} = require('../middlewares/validation');

userRouters.get('/', getUsers);
userRouters.get('/me', getCurrentUser);
userRouters.get('/:userId', validationUserId, getUserById);
userRouters.patch('/me', validationUpdateUser, updateUser);
userRouters.patch('/me/avatar', validationUpdateAvatar, updateAvatar);

module.exports = userRouters;
