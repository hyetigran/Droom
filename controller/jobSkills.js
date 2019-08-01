const router = require("express").Router();

const JobSkills = require("../model/JobSkills");

const {
  jobSkillsValidation,
  updateJobSkillsValidation
} = require("../middleware/validation/index");

router.get("/", async (req, res) => {
  try {
    const jobSkills = await JobSkills.findAll();
    if (!jobSkills.length) {
      return res
        .status(400)
        .json({ message: "Oops, the job skill could not be found" });
    } else {
      return res.status(200).json({ jobSkills });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oops, something went wrong fetching job skills" });
  }
  throw new Error(error);
});

router.get("/:id", async (req, res) => {
  try {
    const jobSkills = await JobSkills.findById(req.params.id);
    if (!jobSkills.length) {
      return res
        .status(400)
        .json({ message: "Oops, that job skill could not be found" });
    } else {
      return res.status(200).json({ jobSkills });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oops, something went wrong fetching job skills" });
  }
  throw new Error(error);
});

router.put("/:id", updateJobSkillsValidation, async (req, res) => {
  try {
    const updateJobSkills = await JobSkills.update(req.params.id, req.body);
    if (!updateJobSkills.length) {
      return res
        .status(400)
        .json({ message: "Oops, that job skill could not be found" });
    } else {
      return res.status(200).json(updateJobSkills);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oops, something went wrong updating job skills" });
  }
  throw new Error(error);
});

router.post("/", jobSkillsValidation, async (req, res) => {
  try {
    const newJobSkill = await JobSkills.add(req.body);
    return res.status(201).json({ skills: newJobSkill });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oops, something went wrong adding job skills" });
  }
  throw new Error(error);
});

router.delete("/:id", async (req, res) => {
  try {
    const record = await JobSkills.remove(id);
    if (record > 0) {
      return res.status(204).json({ message: "Success, job skill deleted" });
    } else {
      return res
        .status(404)
        .json({ message: "Oops, skill could not be found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oops, something went wrong deleting job skills" });
  }
  throw new Error(error);
});

module.exports = router;
