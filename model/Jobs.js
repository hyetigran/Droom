const db = require("../data/dbConfig");

// Add job and return job resource
const add = async (userId, job, jobSkills) => {
  const company = await db("companies")
    .where({ userId })
    .select("id")
    .first();
  let newJob = {
    companyId: company.id,
    ...job
  };

  const [id] = await db("jobs")
    .insert(newJob)
    .returning("id");
  let newJobSkills = jobSkills.map(skill => {
    return { jobId: id, jobSkill: skill };
  });
  await db("jobs_skills").where(newJobSkills);
  const jobWithSkills = {
    ...newJob,
    jobSkills
  };
  return jobWithSkills;
};

// Find all jobs
const findAll = async () => {
  const jobs = await db("jobs");
  const updatedJobs = await Promise.all(
    jobs.map(async job => {
      const skills = await db("jobs_skills").where({
        jobsId: job.id
      });
      return { ...job, jobSkills: skills };
    })
  );
  return updatedJobs;
};

// Find applicantId by userId
const findBy = filter => {
  return db("jobs").where({ companyId: filter });
};

// Find user by id
const findById = id => {
  return db("jobs")
    .where({ id })
    .first()
    .returning("id");
};

// Update applicant profile and return profile resource
const update = async (id, updated) => {
  await db("jobs")
    .where({ id })
    .update(updated);
  return findById(id);
};

// Delete applicant by id
const remove = async id => {
  await db("jobs")
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
  remove
};
