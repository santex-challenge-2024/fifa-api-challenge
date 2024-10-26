const playerProvider = require('../providers/playerProvider');
const { Op } = require('sequelize');
const { writeToBuffer } = require('fast-csv');


const getAllPlayers = async (page, limit, filters, format) => {

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


    const players = await playerProvider.getAll(page, limit, where)

    if (format === 'csv') {
        
        const playersCSV = await playerProvider.getAll(page, null, where); // sin limit para exportar todo
        // Mapear todos los atributos de los jugadores
        const playersData = playersCSV.map(player => player.get({ plain: true }));
        const csvData = await writeToBuffer(playersData, { headers: true });
        return csvData.toString();
    }

    return players;

}

const getOnePlayer = async (id) => {
    const player = await playerProvider.getOne(id);
    if (!player) {
        throw { status: 401, message: 'Player not found' };
    };
    return player;
};

module.exports = {getAllPlayers, getOnePlayer}