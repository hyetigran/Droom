const db = require("../data/dbConfig");
const Jobs = require("./Jobs");
const Applicants = require("./Applicants");

const getMatchedJobs = async userId => {
  let { id } = await Applicants.findById(userId);
  const matches = await db("matches").where({ applicantId: id });

  let jobs = matches.filter(job => job.matched);

  jobs = await Promise.all(
    jobs.map(async job => await Jobs.findById(job.jobId))
  );
  return jobs;
};

const getMatchedApplicants = async jobId => {
  let matches = await db("matches").where({ jobId });
  let applicants = matches.filter(match => match.matched);
  applicants = await Promise.all(
    aplicants.map(
      async applicant =>
        await db("applicants")
          .where({ id: applicant.applicantId })
          .first()
    )
  );
  return applicants;
};

module.exports = {
  getMatchedJobs,
  getMatchedApplicants
};
