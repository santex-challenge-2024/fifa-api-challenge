const playerController = require('../controllers/player.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

router.get('/', playerController.getAllPlayers);

module.exports = router;
