"use strict";

const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = {
  migration: (sequelize, DataTypes) => {
    const type = sequelize.define(
      "type",
      {
        type: DataTypes.STRING
      },
      {}
    );
    type.associate = function(models) {
      type.hasMany(models.pokemon, {
        foreignKey: "typeId",
        as: "types"
      });
    };
    return type;
  },
  route: db.sequelize.define("type", {
    type: Sequelize.STRING
  })
};
