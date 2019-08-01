exports.up = function(knex) {
  return knex.schema.createTable("job_skills", table => {
    table.increments();
    table
      .integer("jobId", 128)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("jobs")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("jobSkill", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("job_skills");
};
