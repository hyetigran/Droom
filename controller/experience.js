const router = require("express").Router();
const Experience = require("../model/Experience");
const {
  experienceValidation,
  updateExperienceValidation
} = require("../middleware/validation/index");

router.post("/", experienceValidation, async (req, res) => {
  try {
    const profile = await Experience.findApplicant(req.body.userId);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, that user profile doesn't exist"
      });
    }
    const experience = await Experience.add(req.body);
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while trying to add experience"
    });
    throw new Error(error);
  }
});

// Get all applicant experience
router.get("/:id", async (req, res) => {
  try {
    const profile = await Experience.findApplicant(req.params.id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, doesn't look like that profile exists"
      });
    }
    const experience = await Experience.findAll(req.params.id);
    if (!experience.length) {
      return res.status(404).json({
        message: "Oops, this profile doesn't have experience yet"
      });
    } else {
      return res.status(200).json(experience);
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching this experience"
    });
    throw new Error(error);
  }
});

router.put("/:id", updateExperienceValidation, async (req, res) => {
  try {
    const profile = await Experience.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, doesn't look like that profile exists"
      });
    }

    const updatedExperience = await Experience.update(req.params.id, req.body);
    res.status(200).json(updatedExperience);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while updating this experience"
    });
    throw new Error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id);
    if (!experience) {
      return res.status(404).json({
        message: "Oops, doesn't look like this experience exists"
      });
    }

    await Experience.remove(id);
    res.status(200).json({
      message: "Experience successfully deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while deleting this experience"
    });
    throw new Error(error);
  }
});

module.exports = router;
