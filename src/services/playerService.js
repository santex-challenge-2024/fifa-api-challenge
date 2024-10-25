const playerProvider = require('../providers/playerProvider');
const { Op } = require('sequelize');


const getAllPlayers = async (page, limit, filters) => {

    const where = {};
    //[Op.like] realizar búsquedas "como". Es útil para búsquedas parciales, por ejemplo: 'Messi' coincidirá con cualquier texto que contenga 'Messi'.
    // Si `filters.name` tiene valor, agrega una condición para `long_name`
    if (filters.name) {
        where.long_name = { [Op.like]: `%${filters.name}%` };
    }

    // Si `filters.club` tiene valor, agrega una condición para `club_name`
    if (filters.club) {
        where.club_name = { [Op.like]: `%${filters.club}%` };
    }
    // Si `filters.position` tiene valor, agrega una condición para `player_positions`
    if (filters.position) {
        where.player_positions = { [Op.like]: `%${filters.position}%` };
    }


    return await playerProvider.getAll(page, limit, where)
}

module.exports = {getAllPlayers}