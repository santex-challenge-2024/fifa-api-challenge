const playerController = require('../controllers/player.controller');
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth.middleware');
const { body } = require('express-validator');

router.get('/', authenticateToken, playerController.getAllPlayers);

router.get('/:id', authenticateToken, playerController.getPlayer);

router.put(
  '/update/:id',
  [
    body('long_name').optional().isString().withMessage('long_name is string'),
    body('player_positions')
      .optional()
      .isString()
      .withMessage('player_positions is string'),
    body('club_name').optional().isString().withMessage('club_name is string'),
    body('nationality_name')
      .optional()
      .isString()
      .withMessage('nationality_name is string'),
    body('overall')
      .optional()
      .isInt()
      .withMessage('nationality_name is number'),
  ],
  authenticateToken,
  playerController.updateOnePlayer,
);

module.exports = router;
