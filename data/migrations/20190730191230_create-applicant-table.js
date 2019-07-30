exports.up = function(knex) {
  return knex.schema.createTable("applicants", table => {
    table.increments();
    table
      .integer("userId", 128)
      .unsigned()
      .notNullable()
      .reference("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("firstName", 128).notNullable();
    table.string("lastName", 128).notNullable();
    table.string("country", 128).notNullable();
    table.string("state", 128).notNullable();
    table.string("city", 128).notNullable();
    table.string("zipcode", 128).notNullable();
    table.string("address", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("applicants");
};
