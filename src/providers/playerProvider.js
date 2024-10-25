const Player = require('../models/players.model')


const getAll = async () => {
    return await Player.findAll();
}

module.exports = {getAll}
