module.exports = {
  skillsValidation,
  updateSkillsValidation
};

function skillsValidation(req, res, next) {
  const { userId, applicantSkills } = req.body.skills;

  if (!userId) {
    return res.status(400).json({
      message: "Please provide a user id"
    });
  }

  if (!applicantSkills.length)
    return res.status(400).json({
      message: "Please provide some skills"
    });

  next();
}

function updateSkillsValidation(req, res, next) {
  const { applicantSkill } = req.body;

  if (!applicantSkill) {
    return res.status(400).json({
      message: "Please provide a skill"
    });
  }
  next();
}
