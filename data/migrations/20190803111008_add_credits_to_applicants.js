exports.up = function(knex) {
  return knex.schema.table("applicants", table => {
    table.integer("credits").defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropColumn("credits");
};
