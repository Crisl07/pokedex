const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("pokedexyuxi", "root", "Ortiz$2019", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
