const express = require('express');
require('dotenv').config();
var cors = require('cors');
const sequelize = require('./src/config/database');
const app = express();
const userRouter = require('./src/routes/user');
const playerRouter = require('./src/routes/players');

app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

app.use('/auth', userRouter);

app.use('/players', playerRouter);

// Función para intentar conectar a la base de datos con reintentos
async function connectWithRetry(retries = 5, delay = 6000) {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('Connection successful');
      return true;
    } catch (error) {
      console.error(`Database connection failed. Retrying in ${delay / 1000} seconds... (${i + 1}/${retries})`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  console.error('Could not connect to the database after multiple attempts.');
  process.exit(1); // Salir si la conexión falla después de todos los intentos
}

// Iniciar el servidor después de que se logre la conexión a la base de datos
async function startServer() {
  await connectWithRetry(); // Intenta conectar antes de iniciar el servidor
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

startServer();