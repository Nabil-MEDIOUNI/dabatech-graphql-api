const jwt = require('jsonwebtoken');

module.exports = (object, maxAge) =>
  jwt.sign(object.toObject(), process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: maxAge,
  });
