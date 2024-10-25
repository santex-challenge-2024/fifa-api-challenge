const express = require('express');
require('dotenv').config();
const sequelize = require('./src/config/database');
const app = express();
const userRouter = require('./src/routes/user');
const playerRouter = require('./src/routes/players');


// Middleware para parsear JSON
app.use(express.json());

app.use('/auth',userRouter);

app.use('/players', playerRouter)

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Error al sincronizar con la base de datos:', err));
