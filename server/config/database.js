const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('plataforma_guttmann', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;

// TODO: CREACIÓN DE BBDD ANTES DE LA CONEXIÓN A SEQUELIZE