const userProvider = require('../providers/userProvider')
const bcrypt = require('bcrypt');

const createNewUser = async (user) => {
  const existingUser = await userProvider.findUserByEmail(user.email);
  if (existingUser) {
    throw { status: 400, message: 'User already exists' };
  }

  user.password = bcrypt.hashSync(user.password, 10);
  return await userProvider.createUser(user);
};

module.exports = { createNewUser };