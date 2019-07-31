const router = require("express").Router();
const Applicants = require("../model/Applicants");
const {
  applicantValidation,
  updateApplicantValidation
} = require("../middleware/validation/index");

router.post("/", applicantValidation, async (req, res) => {
  try {
    const profile = await Applicants.add(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while creating your profile"
    });
    throw new Error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const profile = await Applicants.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, doesn't look like that profile exists"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching this profile"
    });
    throw new Error(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const profile = await Applicants.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, doesn't look like that profile exists"
      });
    }

    const updatedProfile = await Applicants.update(req.params.id, req.body);
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while updating this profile"
    });
    throw new Error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Applicants.findById(id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, doesn't look like that profile exists"
      });
    }

    await Applicants.remove(id);
    res.status(200).json({
      message: "Profile successfully deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while deleting this profile"
    });
    throw new Error(error);
  }
});

module.exports = router;
