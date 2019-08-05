const db = require("../data/dbConfig");

// Add company and return company resource
const add = async ({ userId, company }) => {
  let newCompany = { userId, ...company };

  await db("companies")
    .insert(newCompany)
    .returning("id");
  return db("companies")
    .where({ userId })
    .first();
};

// Find all companies
const findAll = () => {
  return db("companies");
};

// Find user by id
const findById = id => {
  return db("companies")
    .where({ id })
    .first()
    .returning("id");
};

// Update applicant profile and return profile resource
const update = async (id, profile) => {
  await db("companies")
    .where({ id })
    .update(profile);
  return db("companies")
    .where({ id })
    .first();
};

// Delete applicant by id
const remove = async id => {
  await db("companies")
    .where({ id })
    .del();
  return parseInt(id, 10);
};

module.exports = {
  add,
  findAll,
  findById,
  update,
  remove
};
