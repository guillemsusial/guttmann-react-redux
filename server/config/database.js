import * as mongoose from 'mongoose';
require('dotenv').config();

const sequelize = new Sequelize('plataforma_guttmann', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

const RegisterDatabaseConnection = async (Config) => {
  await mongoose.connect(Config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(db => console.log('Database connection stablished.'))
}


module.exports = sequelize;

// TODO: CREACIÓN DE BBDD ANTES DE LA CONEXIÓN A SEQUELIZE