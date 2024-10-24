const userProvider = require('../providers/userProvider')

const createNewUser = async (user) => {
  return await userProvider.createUser(user);
};

module.exports = { createNewUser };