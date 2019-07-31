exports.up = function(knex) {
  return knex.schema.createTable("experience", table => {
    table.increments();
    table
      .integer("applicantId", 128)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("applicants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("expCompany", 128).notNullable();
    table.string("expTitle", 128).notNullable();
    table.string("expDescription", 128).notNullable();
    table.string("expStartDate", 128).notNullable();
    table.string("expEndDate", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("experience");
};
