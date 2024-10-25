const {errorResponse} = require('../utilities/error-response');
const {successResponse} = require('../utilities/success-response');
const {validationResult} = require('express-validator');
const playerService = require('../services/playerService')


const getAllPlayers = async (req, res) => {
    try {
        const players = await playerService.getAllPlayers();
        res.status(200).json(successResponse(200, 'Players', players));
    } catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Internal Server Error';
        res.status(statusCode).json(errorResponse(statusCode, message));
    }
}

module.exports = { getAllPlayers }