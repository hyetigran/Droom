const router = require("express").Router();
const Matched = require("../model/Matched");

router.get("/applicant/:id", async (req, res) => {
  try {
    const matched = await Matched.getMatchedJobs(req.params.id);
    res.status(200).json(matched);
  } catch (error) {
    res.status(500).json({
      message: "Oops, there was an error getting the matches",
      err
    });
    throw new Error(err);
  }
});

router.get("/jobs/:id", async (req, res) => {
  try {
    const matched = await Matched.getMatchedApplicants(req.params.id);
    res.status(200).json(matched);
  } catch (error) {
    res.status(500).json({
      message: "Oops, there was an error getting the matches",
      err
    });
    throw new Error(err);
  }
});

module.exports = router;
