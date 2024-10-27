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

  const players = await playerProvider.getAll(page, limit, where);

  if (format === 'csv') {
    const playersCSV = await playerProvider.getAll(page, null, where); // sin limit para exportar todo
    // Mapear todos los atributos de los jugadores
    const playersData = playersCSV.map((player) => player.get({ plain: true }));
    const csvData = await writeToBuffer(playersData, { headers: true });
    return csvData.toString();
  }

  return players;
};

const getOnePlayer = async (id) => {
  const player = await playerProvider.getOne(id);
  if (!player) {
    throw { status: 401, message: 'Player not found' };
  }
  return player;
};

const updatePlayer = async (playerId, updatePlayer) => {
  const player = await getOnePlayer(playerId);

  // Filtrar campos vacíos
  const updatedData = {};
  const fieldsToUpdate = [
    'long_name',
    'player_positions',
    'club_name',
    'nationality_name',
    'overall',
  ];

  //filtra cada campo y guarda en updateData solo los que vengan con datos
  fieldsToUpdate.forEach((field) => {
    if (updatePlayer[field]) {
      updatedData[field] = updatePlayer[field];
    }
  });

  //si no viene ningun dato corta la ejecucion para no actualizar
  if (Object.keys(updatedData).length === 0) {
    throw { status: 400, message: 'No valid fields provided for update.' }; // Manejo de error si no hay campos válidos
  }

  //actualiza con los campos que si vienen
  await playerProvider.update(player.id, updatedData);

  //traigo el jugador actualizado (sequelize me devuelve solo el numero de registros afectados)
  const playerUpdated = await getOnePlayer(playerId);
  return playerUpdated;
};

module.exports = { getAllPlayers, getOnePlayer, updatePlayer };
