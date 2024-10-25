const Player = require('../models/players.model')


const getAll = async (page,limit) => {
    //cambios para paginacion y demas
    const offset = (page - 1) * limit;

    return await Player.findAll({
        limit: limit,
        offset: offset
    });
}

module.exports = {getAll}
