const express = require("express");
const router = express.Router();
const pokemon = require("../models/pokemon").route;
const type = require('../models/type').route;

router.get("/pokemons", (req, res) => {
  pokemon
    .findAll({
      order: ["name"]
    })
    .then(pokemons => {
      res.json(pokemons);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.get("/pokemons/:typeId", (req, res) => {
  pokemon
    .findAll({
      order: ["name"],
      where: {
        typeId: req.params.typeId
      }
    })
    .then(pokemons => {
      res.json(pokemons);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.get("/pokemon/:id", (req, res) => {
  pokemon
    .findOne({
      where: {
        id: req.params.id
      },
    })
    .then(pokemon => {
      if (pokemon) {
        res.json(pokemon);
      } else {
        res.status(400);
        res.json({ error: "Pokemon does not exist" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/pokemon", (req, res) => {
  for (let field in req.body) {
    if (!field) {
      res.status(400).send("All fiels are required");
    }
  }
  pokemon
    .create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.delete("/pokemon/:id", (req, res) => {
  pokemon
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.json({ status: "Pokemon Deleted!" });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = router;
