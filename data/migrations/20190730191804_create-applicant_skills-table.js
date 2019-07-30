exports.up = function(knex) {
  return knex.schema.createTable("applicant_skills", table => {
    table.increments();
    table
      .integer("applicantId", 128)
      .unsigned()
      .notNullable()
      .reference("id")
      .inTable("applicants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("applicantSkill", 128).unique;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("applicant_skills");
};
