"use strict";

const db = require("../database/db");

const User = db.sequelize.define("user", {
  name: {
    type: db.Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "pokemon_trainer"
  }
});

module.exports = User;
