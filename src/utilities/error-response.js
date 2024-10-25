const errorResponse = (status, message, data = null) => {
    return data ? { status, message, data } : { status, message };
};

module.exports = { errorResponse };