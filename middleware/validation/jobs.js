module.exports = {
  jobValidation,
  updateJobValidation
};

function jobValidation(req, res, next) {
  const { userId, job } = req.body;

  const {
    jobName,
    jobDescription,
    jobExperienceRequired,
    jobExperiencePreferred,
    jobApplyBy
  } = job;

  if (!userId) {
    return res.status(400).json({
      message: "Please provide a user id for this job."
    });
  }
  if (!jobName) {
    return res.status(400).json({
      message: "Please provide a name for this job."
    });
  }

  if (!jobDescription) {
    return res.status(400).json({
      message: "Please provide a description for this job."
    });
  }

  if (!jobExperienceRequired) {
    return res.status(400).json({
      message: "Please provide a country for this job."
    });
  }

  if (!jobExperiencePreferred) {
    return res.status(400).json({
      message: "Please provide a state for this job."
    });
  }

  if (!jobApplyBy) {
    return res.status(400).json({
      message: "Please provide a city for this job."
    });
  }

  next();
}

function updateJobValidation(req, res, next) {
  const { jobId, job } = req.body;

  const {
    jobName,
    jobDescription,
    jobExperienceRequired,
    jobExperiencePreferred,
    jobApplyBy
  } = job;

  if (!jobId) {
    return res.status(400).json({
      message: "Please provide a user id for this job."
    });
  }
  if (!jobName) {
    return res.status(400).json({
      message: "Please provide a name for this job."
    });
  }

  if (!jobDescription) {
    return res.status(400).json({
      message: "Please provide a description for this job."
    });
  }

  if (!jobExperienceRequired) {
    return res.status(400).json({
      message: "Please provide a country for this job."
    });
  }

  if (!jobExperiencePreferred) {
    return res.status(400).json({
      message: "Please provide a state for this job."
    });
  }

  if (!jobApplyBy) {
    return res.status(400).json({
      message: "Please provide a city for this job."
    });
  }

  next();
}
