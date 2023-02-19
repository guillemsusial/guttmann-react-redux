const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  categoryName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  categoryDescription: {
    type: DataTypes.TEXT
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

module.exports = Category;