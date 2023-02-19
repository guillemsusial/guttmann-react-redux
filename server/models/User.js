const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  encryptedPassword: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  birthYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  studies: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
},{
  timestamps: true,
  paranoid: false,
  underscored: true,
});

sequelize.sync();

module.exports = User;