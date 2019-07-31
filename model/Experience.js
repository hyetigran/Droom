const db = require("../data/dbConfig");

// Add experience and return experience resource
const add = async ({ userId, applicantExperience }) => {
  let { applicantId } = await findApplicant(userId);

  const newExperience = applicantExperience.map(exp => {
    return { applicantId, ...exp };
  });

  await db("experience")
    .insert(newExperience)
    .returning("id");
  return db("experience").where({ applicantId });
};

// Find all experience
const findAll = (userId) => {
  let { applicantId } = await findApplicant(userId);
  return db("experience").where({applicantId});
};

// Find user by id
const findById = userId => {
  return db("experience")
    .where({ userId })
    .first()
    .returning("id");
};

// Update applicant profile and return profile resource
const update = async (id, profile) => {
  await db("experience")
    .where({ userId: id })
    .update(profile);
  return db("experience")
    .where({ userId: id })
    .first();
};

// Delete applicant by id
const remove = id => {
  return db("experience")
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