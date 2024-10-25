const playerProvider = require('../providers/playerProvider');


const getAllPlayers = async (page,limit) => {
    return await playerProvider.getAll(page,limit)
}

module.exports = {getAllPlayers}