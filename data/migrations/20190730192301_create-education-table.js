exports.up = function(knex) {
  return knex.schema.createTable("job_skills", table => {
    table.increments();
    table
      .integer("applicantId", 128)
      .unsigned()
      .notNullable()
      .reference("id")
      .inTable("applicants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("eduSchool", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("job_skills");
};
