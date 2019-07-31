exports.up = function(knex) {
  return knex.schema.createTable("education", table => {
    table.increments();
    table
      .integer("applicantId", 128)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("applicants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("eduSchool", 128).notNullable();
    table.string("eduDegree", 128).notNullable();
    table.string("eduDescription", 128).notNullable();
    table.string("eduStartDate", 128).notNullable();
    table.string("eduEndDate", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("education");
};
