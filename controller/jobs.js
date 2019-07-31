const router = require("express").Router();
const Jobs = require("../models/Jobs");

const {
  jobValidation,
  updateJobValidation
} = require("../middleware/validation/index");

router.get("/", async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching jobs"
    });
  }
  throw new Error(error);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Jobs.findById(id);
    if (!jobs) {
      return res.status(404).json({
        message: "Oops, could not retrieve the job"
      });
    } else {
      return res.status(200).json({ job });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching jobs"
    });
  }
  throw new Error(error);
});

router.post("/", jobValidation, async (req, res) => {
  try {
    const { userId, job, jobSkills } = req.body;
    const newJob = await Jobs.add(userId, job, jobSkills);
    res.status(201).json({ jobs: newJob });
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching jobs"
    });
  }
  throw new Error(error);
});

router.put("/:id", updateJobValidation, async (req, res) => {
  try {
    const { id } = req.params;
    const updated = req.body;

    const updatedJob = await Jobs.update(id, updated);
    if (!updatedJob.id) {
      return res.status(404).json({
        message: "Oops, could not find job in the database"
      });
    } else {
      return res.status(200).json({ jobs: updatedJob });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching jobs"
    });
  }
  throw new Error(error);
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const record = await Jobs.remove(id);

    if (record.length) {
      res.status(204).json({ message: "Job was deleted successfully" });
    } else {
      res.status(404).json({ message: "Oops, job could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching jobs"
    });
  }
  throw new Error(error);
});

module.exports = router;
