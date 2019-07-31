const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

module.exports = user => {
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
