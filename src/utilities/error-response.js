const errorResponse = (status, message) => {
    return {
        status: status,
        message: message
    };
};

module.exports = { errorResponse };