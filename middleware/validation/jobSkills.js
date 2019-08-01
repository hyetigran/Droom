module.exports = {
  jobSkillsValidation,
  updateJobSkillsValidation
};

function jobSkillsValidation(req, res, next) {
  const { jobId, jobSkill } = req.body;

  if (!jobId) {
    return res.status(400).json({
      message: "Please provide a job id"
    });
  }

  if (!jobSkill) {
    return res.status(400).json({
      message: "Please provide a job skill field."
    });
  }

  if (!jobSkill.length)
    return res.status(400).json({
      message: "Please provide some job skills"
    });

  next();
}

function updateJobSkillsValidation(req, res, next) {
  const { jobSkill } = req.body;

  if (!jobSkill)
    return res.status(400).json({
      message: "Please provide a job skill"
    });

  next();
}
