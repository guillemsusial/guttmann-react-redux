const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Session = require('./Session.js');
const Game = require('./Game.js');

const Activity = sequelize.define('activity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  sessionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Session,
      key: 'id'
    }
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Game,
      key: 'id'
    }
  },
  completionTime: {
    type: DataTypes.INTEGER(10),
    allowNull: true
  },
  maxRound: {
    type: DataTypes.INTEGER(10),
    allowNull: true
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

Activity.belongsTo(Session, { foreignKey: 'sessionId' });
Activity.belongsTo(Game, { foreignKey: 'gameId' });

sequelize.sync();

module.exports = Activity;