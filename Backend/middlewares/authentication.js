const { verify } = require("jsonwebtoken");

let authenticateUser = (req, res, next) => {
  let token = req.get("Authorization");

  verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: false,
        err
      });
    }
    req.user = decoded.user;
    next();
  });

};

let verifyRole = (req, res, next) => {
  if (req.user.role !== "pokemon_trainer_expert") {
    return res.status(401).json({
      status: false,
      message: "You don't have access to this route"
    });
  }

  next();
};

module.exports = {
  authenticateUser,
  verifyRole
};
