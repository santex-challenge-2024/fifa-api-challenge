const express = require('express');
const userController = require('../controllers/user.controller')
const router = express.Router();


router.post('/registerUser', userController.createUser);


module.exports = router;
