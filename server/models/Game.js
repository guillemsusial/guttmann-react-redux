const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Category = require('./Category.js');

const Game = sequelize.define('game', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  gameName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  gameDescription: {
    type: DataTypes.TEXT
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
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

Game.belongsTo(Category, { foreignKey: 'categoryId' });

sequelize.sync();

module.exports = Game;