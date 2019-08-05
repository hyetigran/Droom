const db = require("../data/dbConfig");

// Add skills and return skills resource
const add = async ({ userId, applicantSkills }) => {
  let applicantId = db("applicants")
    .where({ userId })
    .select("id")
    .first()
    .returning("id");

  const newSkills = applicantSkills.map(skill => {
    return { applicantId, applicantSkill: skill };
  });

  await db("applicant_skills")
    .insert(newSkills)
    .returning("id");

  return db("applicant_skills").where({ applicantId });
};

// Find all skills
const findAll = async userId => {
  let applicantId = await findApplicant(userId);
  return db("applicant_skills").where({ applicantId });
};

// Find applicantId by userId
const findApplicant = id => {
  return db("applicants")
    .where({ userId: id })
    .select("id")
    .first()
    .returning("id");
};

// Find user by id
const findById = id => {
  return db("applicant_skills")
    .where({ id })
    .first()
    .returning("id");
};

// Update applicant skill and return skill resource
const update = async (id, skill) => {
  await db("applicant_skills")
    .where({ id })
    .update(skill);
  return db("applicant_skills")
    .where({ id })
    .first();
};

// Delete applicant by id
const remove = async id => {
  await db("applicant_skills")
    .where({ id })
    .del();

  return parseInt(id, 10);
};

module.exports = {
  add,
  findAll,
  findApplicant,
  findById,
  update,
  remove
};
