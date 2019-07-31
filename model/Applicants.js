const db = require("../data/dbConfig");

// Add applicant and return applicant resource
const add = async ({ userId, applicant }) => {
  let newApplicant = { userId, ...applicant };

  await db("applicants")
    .insert(newApplicant)
    .returning("id");
  return db("applicants")
    .where({ userId })
    .first();
};

// Find all applicants
const findAll = () => {
  return db("applicants");
};

// Find user by id
const findById = userId => {
  return db("applicants")
    .where({ userId })
    .first()
    .returning("id");
};

// Update applicant profile and return profile resource
const update = async (id, profile) => {
  await db("applicants")
    .where({ userId: id })
    .update(profile);
  return db("applicants")
    .where({ userId: id })
    .first();
};

// Delete applicant by id
const remove = id => {
  await db("applicants")
    .where({ userId: id })
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
