const router = require('express').Router();
const express = require('express');
const userRoutes = require('./user');
const cardRoutes = require('./card');
const NotFound = require('../errors/NotFound');

router.use(express.json());
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use((req, res, next) => {
  next(new NotFound('Такой страницы не существует'));
});

module.exports = router;
