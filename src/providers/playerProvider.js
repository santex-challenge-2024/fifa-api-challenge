const Player = require('../models/players.model')


const getAll = async () => {
    //cambios para paginacion y demas
    return await Player.findAll();
}

module.exports = {getAll}
