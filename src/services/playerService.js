const playerProvider = require('../providers/playerProvider');


const getAllPlayers = async () => {
    return await playerProvider.getAll()
}

module.exports = {getAllPlayers}