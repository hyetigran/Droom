const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

module.exports = server => {
  server.use(express.json());
  server.use(bodyParser.json());
  server.use(helmet());
  server.use(morgan("dev"));
  server.use(cors());
};
