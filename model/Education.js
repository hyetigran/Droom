const db = require("../data/dbConfig");

// Add education and return education resource
const add = async ({ userId, applicantEducation }) => {
  let { applicantId } = await findApplicant(userId);

  const newEducation = applicantEducation.map(exp => {
    return { applicantId, ...exp };
  });

  await db("education")
    .insert(newEducation)
    .returning("id");
  return db("education").where({ applicantId });
};

// Find all education
const findAll = (userId) => {
  let { applicantId } = await findApplicant(userId);
  return db("education").where({applicantId});
};

// Find applicantId by userId
const findApplicant = (id) => {
  return db('applicants')
    .where({userId: id})
    .select('id')
    .first()
    .returning('id')
}

// Find user by id
const findById = userId => {
  return db("education")
    .where({ userId })
    .first()
    .returning("id");
};

// Update applicant profile and return profile resource
const update = async (id, profile) => {
  await db("education")
    .where({ userId: id })
    .update(profile);
  return db("education")
    .where({ userId: id })
    .first();
};

// Delete applicant by id
const remove = id => {
  await db("education")
    .where({ userId: id })
    .del();
  return parseInt(id, 10);
};

module.exports = {
  add,
  findAll,
  findApplicant,
  findById,
  update,
  remove,
};