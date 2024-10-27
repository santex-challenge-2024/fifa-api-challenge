const { errorResponse, handleError } = require('../utilities/error-response');
const { successResponse } = require('../utilities/success-response');
const { validationResult } = require('express-validator');
const playerService = require('../services/playerService');

const getAllPlayers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const format = req.query.format;
  const filters = {
    name: req.query.name,
    club: req.query.club,
    position: req.query.position,
  };

  try {
    const data = await playerService.getAllPlayers(
      page,
      limit,
      filters,
      format,
    );
    if (format === 'csv') {
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=players.csv');
      return res.status(200).send(data);
    }

    res.status(200).json(successResponse(200, 'Players', data));
  } catch (error) {
    handleError(error, res);
  }
};

const getPlayer = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const player = await playerService.getOnePlayer(id);
    res.status(200).json(successResponse(200, 'Player', player));
  } catch (error) {
    handleError(error, res);
  }
};

const updateOnePlayer = async (req, res) => {
  const playerId = parseInt(req.params.id);
  console.log(req.body);

  try {
    const errors = validationResult(req);
    //if error validator contain error
    if (!errors.isEmpty()) {
      return res.status(400).json(
        errorResponse(
          400,
          'validator error',
          errors.array().map((error) => error.msg),
        ),
      );
    }
    const updatePlayer = await playerService.updatePlayer(playerId, req.body);
    res.status(200).json(successResponse(200, 'Update Player', updatePlayer));
  } catch (error) {
    handleError(error, res);
  }
};

module.exports = { getAllPlayers, getPlayer, updateOnePlayer };
