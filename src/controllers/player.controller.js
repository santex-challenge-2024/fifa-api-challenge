const {errorResponse} = require('../utilities/error-response');
const {successResponse} = require('../utilities/success-response');
const {validationResult} = require('express-validator');
const playerService = require('../services/playerService')


const getAllPlayers = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const format = req.query.format;
    const filters = {
        name: req.query.name,
        club: req.query.club,
        position: req.query.position
    };
    
    try {
        const data = await playerService.getAllPlayers(page,limit, filters, format);
        if (format === 'csv') {
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment; filename=players.csv');
            return res.status(200).send(data);
        }

        res.status(200).json(successResponse(200, 'Players', data));
    } catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Internal Server Error';
        res.status(statusCode).json(errorResponse(statusCode, message));
    }
}

const getPlayer = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const player = await playerService.getOnePlayer(id);
        res.status(200).json(successResponse(200, 'Player', player));
    } catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Internal Server Error';
        res.status(statusCode).json(errorResponse(statusCode, message));
    }
};

module.exports = { getAllPlayers, getPlayer }