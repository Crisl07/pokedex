const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { createAccessToken, createRefreshToken } = require('../middlewares/tokens');
const { verify } = require('jsonwebtoken');

const router = express.Router();

router.post("/signup", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(newUser => {
      if (!newUser) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        User.create(req.body).then(data => {
          res.status(200).send(data);
        });
      } else {
        res.status(400).send("The account already exists");
      }
    })
    .catch(err => {
      console.log("erroooor " + err);
    });
});

router.post("/refresh_token", (req, res) => {
  const token = req.body.refreshToken;
  if (!token) {
    return res.json({ ok: false, accessToken: "", refreshToken: "", message: "refresh token was not found" })
  }

  let payload = null;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return res.json({ ok: false, accessToken: "", refreshToken: "", message: "payload failed" })
  }
  User.findOne({
    where: {
      name: payload.user.name
    }
  }).then(userDB => {
    if (!userDB) {
      return res.json({ ok: false, accessToken: "", refreshToken: "", message: "userDB doesn't exist" })
    }
    const user = userDB;

    return res.json({ ok: false, accessToken: createAccessToken(user), refreshToken: createRefreshToken(user), message: "AccessToken!" })
  }).catch(err => {
    console.log('Error trying to get user');
  })
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
      name: req.body.name
    }
  }).then(user => {
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      res.status(400).send("name, email or password are not valid");
    } else {
      delete user.dataValues.password;
      let token = createAccessToken(user);

      let refreshToken = createRefreshToken(user);

      res.json({
        status: true,
        message: "You are logged in now",
        user,
        token,
        refreshToken
      });
    }
  });
});
module.exports = router;
