const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

const generateToken = user => {
  const payload = {
    subject: user.id,
    applicant: user.applicant,
    employer: user.employer
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, jwtSecret, options);
};

module.exports = { generateToken };
