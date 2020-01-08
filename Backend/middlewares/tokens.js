const { sign } = require('jsonwebtoken');

const createAccessToken = (user) => {
  return sign(
    {
      user
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1m" }
  );
}

const createRefreshToken = (user) => {
  return sign(
    {
      user
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "3m" }
  )
}

module.exports = {
  createAccessToken,
  createRefreshToken
}