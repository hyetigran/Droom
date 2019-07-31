const router = require("express").Router();
const education = require("../model/education");
const {
  educationValidation,
  updateEducationValidation
} = require("../middleware/validation/index");

router.post("/", educationValidation, async (req, res) => {
  try {
    const profile = await Education.findApplicant(req.body.userId);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, that user profile doesn't exist"
      });
    }
    const education = await Education.add(req.body);
    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while trying to add education"
    });
    throw new Error(error);
  }
});

// Get all applicant education
router.get("/:id", async (req, res) => {
  try {
    const profile = await education.findApplicant(req.params.id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, doesn't look like that profile exists"
      });
    }
    const education = await education.findAll(req.params.id);
    if (!education.length) {
      return res.status(404).json({
        message: "Oops, this profile doesn't have education yet"
      });
    } else {
      return res.status(200).json(education);
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching this education"
    });
    throw new Error(error);
  }
});

router.put("/:id", updateEducationValidation, async (req, res) => {
  try {
    const profile = await Education.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, doesn't look like that profile exists"
      });
    }

    const updatedEducation = await education.update(req.params.id, req.body);
    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while updating this education"
    });
    throw new Error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findById(id);
    if (!education) {
      return res.status(404).json({
        message: "Oops, doesn't look like this education exists"
      });
    }

    await Education.remove(id);
    res.status(200).json({
      message: "education successfully deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while deleting this education"
    });
    throw new Error(error);
  }
});

module.exports = router;
