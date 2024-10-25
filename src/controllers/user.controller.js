const userService = require('../services/userService');
const {errorResponse} = require('../utilities/error-response');
const {successResponse} = require('../utilities/success-response');
const {validationResult} = require('express-validator');

const loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        //if error validator contain error
        if (!errors.isEmpty()) {
            return res.status(400).json(errorResponse(400, "validator error", errors.array().map(error => error.msg)));
        }

        const {email, password} = req.body;

        const accessToken = await userService.login(email, password);

        res.status(200).json(successResponse(200, 'login ok', {accessToken}));

    } catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Internal Server Error';
        res.status(statusCode).json(errorResponse(statusCode, message));
    }
}

const createUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        //if error validator contain error
        if (!errors.isEmpty()) {
            return res.status(400).json(errorResponse(400, "validator error", errors.array().map(error => error.msg)));
        }
        
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
        const statusCode = error.status || 500;
        const message = error.message || 'Internal Server Error';
        res.status(statusCode).json(errorResponse(statusCode, message));
    }
};

module.exports = { createUser, loginUser };