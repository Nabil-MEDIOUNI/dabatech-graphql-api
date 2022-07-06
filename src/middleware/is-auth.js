const jwt = require('jsonwebtoken');

module.exports = (req) => {
  const GET_AUTHORIZATION = req.get('Authorization');

  if (!GET_AUTHORIZATION) {
    throw new Error('Error: Unauthenticated!');
  }

  const tokenAuthPart = GET_AUTHORIZATION.split(' ');
  let encodedPayload = tokenAuthPart[1];

  jwt.verify(tokenAuthPart[1], process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) {
      console.log('Error: Unauthenticated!');
    } else {
      encodedPayload = data._id;
    }
  });

  return encodedPayload;
};
