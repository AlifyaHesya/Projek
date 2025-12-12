const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    judul: { type: DataTypes.STRING, allowNull: false },
    deskripsi: { type: DataTypes.TEXT },
    deadline: { type: DataTypes.DATE },
    status: { type: DataTypes.ENUM('belum','proses','selesai'), defaultValue: 'belum' }
  }, { tableName: 'tasks' });
};
