const Sequelize = require('sequelize');

const sequelize = new Sequelize('diskon_toko', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
