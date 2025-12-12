const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./user')(sequelize);
const Ukt = require('./ukt')(sequelize);
const Task = require('./task')(sequelize);
const Notification = require('./notification')(sequelize);

// Associations
User.hasMany(Ukt, { foreignKey: 'userId' });
Ukt.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Notification, { foreignKey: 'userId' });
Notification.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Ukt, Task, Notification };
