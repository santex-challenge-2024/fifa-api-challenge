const User = require('../models/user.model');


const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (error) {
        return error
    }
}

module.exports = {createUser}