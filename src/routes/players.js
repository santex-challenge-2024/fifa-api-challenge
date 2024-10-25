const playerController = require('../controllers/player.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authenticateToken = require('../middleware/auth.middleware')

router.get('/', authenticateToken ,playerController.getAllPlayers);

module.exports = router;
