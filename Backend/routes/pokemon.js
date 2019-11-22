const express = require("express");
const router = express.Router();
const pokemon = require("../models/pokemon").route;

router.get("/pokemons", (req, res) => {
  pokemon
    .findAll({
      order: ["name"]
    })
    .then(pokemons => {
      res.json(pokemons);
    })
    .catch(err => {
      res.status(400).send("error: " + err);
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
      res.status(400).send("error: " + err);
    });
});

router.get("/pokemon/:id", (req, res) => {
  pokemon
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(pokemon => {
      if (pokemon) {
        res.json(pokemon);
      } else {
        res.status(404);
        res.json({ error: "Pokemon does not exist" });
      }
    })
    .catch(err => {
      res.status(400).send("error: " + err);
    });
});

router.post("/pokemon", (req, res) => {
  pokemon
    .create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send("error: " + err);
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
      res.send("Pokemon Deleted!");
    })
    .catch(err => {
      res.status(400).send("error: " + err);
    });
});

module.exports = router;
