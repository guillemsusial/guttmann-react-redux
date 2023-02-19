const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Activity = require('./Activity.js');

const Round = sequelize.define('round', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  activityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Activity,
      key: 'id'
    }
  },
  round: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
  },
  roundTime: {
    type: DataTypes.INTEGER(10),
    allowNull: false
  },
  warning: {
    type: DataTypes.INTEGER(10),
    allowNull: false
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

Round.belongsTo(Activity, { foreignKey: 'activityId' });

sequelize.sync();

module.exports = Round;