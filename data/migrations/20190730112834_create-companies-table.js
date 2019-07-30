exports.up = function(knex) {
  return knex.schema.createTable("companies", table => {
    table.increments();
    table
      .integer("userId", 128)
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("companyName", 128).notNullable();
    table.string("companyDescription", 255).notNullable();
    table.string("country", 128).notNullable();
    table.string("state", 128).notNullable();
    table.string("city", 128).notNullable();
    table.string("zipcode", 128).notNullable();
    table.string("address", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("companies");
};
