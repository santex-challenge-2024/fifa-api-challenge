const userProvider = require('../providers/userProvider');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (email, password) => {
  const user = await userProvider.findUserByEmail(email);
  if (!user) {
    throw { status: 400, message: 'Email is invalid' };
  }

  //compare hash password
  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    throw { status: 400, message: 'Password is invalid' };
  }

  const payload = { id: user.id, firstname: user.first_name };

  const accessToken = signJwt(payload, process.env.JWT_SECRET, '3h');

  return accessToken;
};

const createNewUser = async (user) => {
  const existingUser = await userProvider.findUserByEmail(user.email);
  if (existingUser) {
    throw { status: 400, message: 'User already exists' };
  }

  user.password = bcrypt.hashSync(user.password, 10);
  return await userProvider.createUser(user);
};

//jwt sign
const signJwt = (payload, jwt_secret, expiresIn) => {
  return jwt.sign(payload, jwt_secret, { expiresIn: expiresIn });
};

module.exports = { createNewUser, login };
