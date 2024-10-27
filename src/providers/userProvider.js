const User = require('../models/user.model');

const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = { createUser, findUserByEmail };
