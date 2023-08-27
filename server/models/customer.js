// server/models/customer.js
const Sequelize = require('sequelize');
const sequelize = require('../db');

const Customer = sequelize.define('customer', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  totalSpent: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = Customer;
