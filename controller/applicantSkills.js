const router = require("express").Router();
const ApplicantSkills = require("../model/ApplicantSkills");
const {
  skillsValidation,
  updateSkillsValidation
} = require("../middleware/validation/index");

router.post("/", skillsValidation, async (req, res) => {
  try {
    const profile = await ApplicantSkills.findApplicant(req.body.skills.userId);

    if (!profile)
      return res.status(404).json({
        message: "Sorry, but that user doesn't have a profile"
      });
    const skills = await ApplicantSkills.add(req.body.skills);
    res.status(201).json(skills);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while creating your skill"
    });
    throw new Error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await ApplicantSkills.findById(id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, doesn't look like that profile exists"
      });
    }
    const skills = await ApplicantSkills.findAll(id);

    if (!skills.length) {
      return res.status(404).json({
        message: "Oops, that profile doesn't have any skills"
      });
    } else {
      return res.status(200).json(skills);
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching this profile"
    });
    throw new Error(error);
  }
});

router.put("/:id", updateSkillsValidation, async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await ApplicantSkills.findById(id);
    if (!skill) {
      return res.status(404).json({
        message: "Oops, doesn't look like that skill exists"
      });
    } else {
      const updatedSkills = await ApplicantSkills.update(id, req.body);
      res.status(200).json(updatedSkills);
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while updating this skill"
    });
    throw new Error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await ApplicantSkills.findById(id);
    if (!skill) {
      return res.status(404).json({
        message: "Oops, doesn't look like that skill exists"
      });
    } else {
      await ApplicantSkills.remove(id);
      res.status(200).json({
        message: "Skill successfully deleted"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while deleting this skill"
    });
    throw new Error(error);
  }
});

module.exports = router;
