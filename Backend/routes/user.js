const express = require("express");
const router = express.Router();
const user = require("../models/user").route;

router.post("/signup", (req, res) => {
  user
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then(newUser => {
      if (!newUser) {
        user.create(req.body).then(data => {
          res.status(200).send(data);
        });
      } else {
        res.status(400).send("The account already exists")
      }
    })
    .catch(err => {
      console.log("erroooor " + err);
    });
});

module.exports = router;
