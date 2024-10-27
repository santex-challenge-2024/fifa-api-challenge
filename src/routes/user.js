const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();
const { body } = require('express-validator');

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  userController.loginUser,
);

router.post(
  '/registerUser',
  [
    body('first_name').notEmpty().withMessage('First_name is required'),
    body('last_name').notEmpty().withMessage('Last_name is required'),
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  userController.createUser,
);

module.exports = router;
