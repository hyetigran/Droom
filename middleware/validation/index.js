const authValidation = require("./auth");
const {
  experienceValidation,
  updateExperienceValidation
} = require("./experience");
const {
  educationValidation,
  updateEducationValidation
} = require("./education");
const { companyValidation, updateCompanyValidation } = require("./companies");

const { jobValidation, updateJobValidation } = require("./jobs");

const {
  jobSkillsValidation,
  updateJobSkillsValidation
} = require("./jobSkills");

module.exports = {
  authValidation,
  experienceValidation,
  updateExperienceValidation,
  educationValidation,
  updateEducationValidation,
  companyValidation,
  updateCompanyValidation,
  jobValidation,
  updateJobValidation,
  jobSkillsValidation,
  updateJobSkillsValidation
};
