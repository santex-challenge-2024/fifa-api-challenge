const playerController = require('../controllers/player.controller');
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth.middleware')

router.get('/', authenticateToken, playerController.getAllPlayers);

router.get('/:id', authenticateToken, playerController.getPlayer)

module.exports = router;
