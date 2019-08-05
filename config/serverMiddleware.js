const express = require("express");
const bodyParser = require("body-parser");
//const helmet = require("helmet");
//const morgan = require("morgan");
//const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./keys");

module.exports = server => {
  server.use(express.json());
  server.use(bodyParser.json());
  //server.use(helmet());
  //server.use(morgan("dev"));
  //server.use(cors());
  server.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
  server.use(passport.initialize());
  server.use(passport.session());
};
