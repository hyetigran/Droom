exports.up = function(knex) {
  return knex.schema.createTable("jobs", table => {
    table.increments();
    table
      .integer("companyId", 128)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("companies")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("jobName", 128).notNullable();
    table.text("jobDescription").notNullable();
    table.text("jobExperienceRequired").notNullable();
    table.text("jobExperiencePreferred").notNullable();
    table.text("jobResponsibilities").notNullable();
    table.string("jobApplyBy", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("jobs");
};
