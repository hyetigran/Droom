exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("email", 128).unique();
    table.string("password", 128);
    table.string("googleId", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
