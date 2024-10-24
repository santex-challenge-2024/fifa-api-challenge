const userService = require('../services/userService');

const createUser = async (req, res) => {
    try {
        const {first_name, last_name, email, password} = req.body
        const user = {
            first_name,
            last_name,
            email,
            password
        }
        const newUser = await userService.createNewUser(user);
        res.json(newUser);
    } catch (error) {
        return error;
    }
};

module.exports = { createUser };