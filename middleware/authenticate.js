const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/keys");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({
          message: "Unauthorized access"
        });
      } else {
        req.decodedJWT = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "Token was not provided"
    });
  }
};
