const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const User = require('./User.js');

const Session = sequelize.define('session', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  sessionName: {
    type: DataTypes.STRING(255)
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

Session.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync();

module.exports = Session;