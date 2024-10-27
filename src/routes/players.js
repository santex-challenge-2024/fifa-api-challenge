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
    body('player_positions').optional().isString().withMessage('player_positions is string'),
    body('club_name').optional().isString().withMessage('club_name is string'),
    body('nationality_name').optional().isString().withMessage('nationality_name is string'),
    body('overall').optional().isInt().withMessage('nationality_name is number'),
  ],
  authenticateToken,
  playerController.updateOnePlayer,
);

router.post(
  '/create',
  [
    body('fifa_version').notEmpty().isInt().withMessage('fifa_version is required'),
    body('fifa_update').notEmpty().isInt().withMessage('fifa_update is required'),
    body('player_face_url').notEmpty().isString().withMessage('player_face_url is required'),
    body('long_name').notEmpty().isString().withMessage('long_name is required'),
    body('player_positions').notEmpty().isString().withMessage('player_positions is required'),
    body('club_name').notEmpty().isString().withMessage('club_name is required'),
    body('nationality_name').notEmpty().isString().withMessage('nationality_name is required'),
    body('overall').notEmpty().isInt().withMessage('overall is required'),
    body('potential').notEmpty().isInt().withMessage('potential is required'),
    body('age').notEmpty().isInt().withMessage('age is required'),
  ],
  authenticateToken,
  playerController.createNewPlayer,
);

module.exports = router;
