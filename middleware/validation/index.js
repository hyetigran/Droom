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

module.exports = {
  authValidation,
  experienceValidation,
  updateExperienceValidation,
  educationValidation,
  updateEducationValidation,
  companyValidation,
  updateCompanyValidation
};
