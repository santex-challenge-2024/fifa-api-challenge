const errorResponse = (status, message, data = null) => {
  return data ? { status, message, data } : { status, message };
};

//manejo de errores
const handleError = (error, res) => {
  const statusCode = error.status || 500;
  const message = error.message || 'Internal Server Error';
  res.status(statusCode).json(errorResponse(statusCode, message));
};

module.exports = { errorResponse, handleError };
