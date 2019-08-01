const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      email: "microsoft@microsoft.com",
      password: bcrypt.hashSync("password", 12)
    },
    {
      email: "apple@apple.com",
      password: bcrypt.hashSync("password", 12)
    },
    {
      email: "github@github.com",
      password: bcrypt.hashSync("password", 12)
    },
    {
      email: "arshak@gmail.com",
      password: bcrypt.hashSync("password", 12)
    },
    {
      email: "tigran@gmail.com",
      password: bcrypt.hashSync("password", 12)
    },
    {
      email: "gene@gmail.com",
      password: bcrypt.hashSync("password", 12)
    }
  ]);
};
