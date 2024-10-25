const jwt = require('jsonwebtoken');
const {errorResponse} = require('../utilities/error-response')

// Define tu clave secreta, puede ser guardada en una variable de entorno
const SECRET_KEY = process.env.JWT_SECRET || 'tuClaveSecreta';

const authenticateToken = (req, res, next) => {
    //const token = req.headers['authorization'];
    const token = req.headers.authorization?.split(' ')[1] ?? null;
    
    if (!token) {
        return res.status(401).json(errorResponse(401, 'Token not found'));
    }

    // Verifica el token
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json(errorResponse(403, 'Invalid Token'));
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;