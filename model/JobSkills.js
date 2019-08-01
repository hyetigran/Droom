const db = require("../data/dbConfig");

// Add job skill and return job skill resource
const add = async ({ jobId, jobSkill }) => {
  const newSkill = jobSkill.map(skill => {
    return { jobId, jobSkill: skill };
  });

  await db("job_skills")
    .insert(newSkill)
    .returning("id");
  return findBy(jobId);
};

// Find all skills
const findAll = () => {
  return db("job_skills");
};

// Find job skill by filter
const findBy = (filter) => {
  return db('job_skills')
    .where({jobId: filter})
}

// Find job skill by id
const findById = id => {
  return db("job_skills")
    .where({ id })
    .first()
    .returning("id");
};

// Update a job skill
const update = async (id, updated) => {
  await db("job_skills")
    .where({ id })
    .update(updated);
  return findById(id)
};

// Delete a job skill
const remove = id => {
  await db("job_skills")
    .where({ id })
    .del();
  return parseInt(id, 10);
};

module.exports = {
  add,
  findAll,
  findBy,
  findById,
  update,
  remove,
  
};
