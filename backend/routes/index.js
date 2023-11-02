const router = require('express').Router();
const express = require('express');
const userRoutes = require('./user');
const cardRoutes = require('./card');
const { logout } = require('../controllers/user');
const NotFound = require('../errors/NotFound');

router.use(express.json());
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('/signout', logout);
router.use((req, res, next) => {
  next(new NotFound('Такой страницы не существует'));
});

module.exports = router;
