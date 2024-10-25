const playerProvider = require('../providers/playerProvider');
const { Op } = require('sequelize');


const getAllPlayers = async (page, limit, filters) => {

    const where = {};
    if (filters.name) {
        where.long_name = { [Op.like]: `%${filters.name}%` };
    }

    if (filters.club) {
        where.club_name = { [Op.like]: `%${filters.club}%` };
    }
    if (filters.position) {
        where.player_positions = { [Op.like]: `%${filters.position}%` };
    }


    return await playerProvider.getAll(page, limit, where)
}

module.exports = {getAllPlayers}