const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Ukt', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    semester: { type: DataTypes.INTEGER },
    jumlah: { type: DataTypes.INTEGER },
    statusPembayaran: { type: DataTypes.ENUM('belum','proses','valid','invalid'), defaultValue: 'belum' },
    buktiUrl: { type: DataTypes.STRING },
    tanggalUpload: { type: DataTypes.DATE }
  }, { tableName: 'ukts' });
};
