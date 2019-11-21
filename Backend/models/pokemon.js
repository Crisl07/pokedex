"use strict";

const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = {
  migration: (sequelize, DataTypes) => {
    const pokemon = sequelize.define(
      "pokemon",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        img: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false
        },
        typeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",
          references: {
            model: "types",
            key: "id",
            as: "typeId"
          }
        }
      },
      {}
    );
    pokemon.associate = function(models) {
      pokemon.belongsTo(models.type, {
        foreignKey: "typeId",
        onDelete: "CASCADE"
      });
    };
    return pokemon;
  },
  route: db.sequelize.define("pokemon", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    typeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      references: {
        model: "types",
        key: "id",
        as: "typeId"
      }
    }
  })
};
