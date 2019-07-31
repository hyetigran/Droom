exports.up = function(knex) {
  return knex.schema.createTable("matches", table => {
    table.increments();
    table
      .integer("applicantId", 128)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("applicants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("jobId", 128)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("jobs")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.boolean("applicantMatch").defaultTo("false");
    table.boolean("jobMatch").defaultTo("false");
    table.boolean("matched").defaultTo("false");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("matches");
};
