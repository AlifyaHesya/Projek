const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('mahasiswa','admin'), defaultValue: 'mahasiswa' },
    notifEnabled: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) user.password = await bcrypt.hash(user.password, 10);
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) user.password = await bcrypt.hash(user.password, 10);
      }
    },
    tableName: 'users'
  });

  User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};
