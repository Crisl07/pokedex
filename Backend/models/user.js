"use strict";

const db = require("../database/db");

module.exports = {
  migration: (sequelize, DataTypes) => {
    const user = sequelize.define(
      "user",
      {
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {}
    );
    user.associate = function(models) {
      // associations can be defined here
    };
    return user;
  },
  route: db.sequelize.define("user", {
    username: {
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
    }
  })
};
