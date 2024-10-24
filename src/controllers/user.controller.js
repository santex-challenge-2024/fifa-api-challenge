const userService = require('../services/userService');
const {errorResponse} = require('../utilities/error-response')
const {successResponse} = require('../utilities/success-response')

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
        res.status(201).json(successResponse(201, 'User created successfully', newUser));
    } catch (error) {
        if (error.status && error.message) {
            return res.status(error.status).json(errorResponse(error.status, error.message));
        }
        return res.status(500).json(errorResponse(500, 'Internal Server Error'));
    }
};

module.exports = { createUser };