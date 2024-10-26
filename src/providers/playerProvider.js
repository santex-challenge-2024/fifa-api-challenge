const Player = require('../models/players.model')


const getAll = async (page, limit, where) => {
    //cambios para paginacion y demas
    const offset = (page - 1) * limit;

    return await Player.findAll({
        where,
        limit: limit,
        offset: offset
    });
};

const getOne = async (id) =>{
    return await Player.findOne({where: {id: id}});
};

module.exports = {getAll, getOne}
