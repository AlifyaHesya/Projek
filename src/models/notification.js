const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Notification', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    judul: { type: DataTypes.STRING },
    isi: { type: DataTypes.TEXT },
    read: { type: DataTypes.BOOLEAN, defaultValue: false },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, { tableName: 'notifications' });
};
