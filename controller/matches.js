const router = require("express").Router();
const Matches = require("../model/Matches");
const Applicants = require("../model/Applicants");
const Jobs = require("../model/Jobs");
const Companies = require("../model/Companies");
const Users = require("../model/Users");

router.get("/applicant/:id", async (req, res) => {
  try {
    const profile = await Applicants.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, the user doesn't have a profile"
      });
    } else {
      const matches = await Matches.applicantMatches(req.params.id);
      res.status(200).json(matches);
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching matches"
    });
    throw new Error(error);
  }
});

router.get("/applicant/:id/match/job/:jobId", async (req, res) => {
  try {
    const { id, jobId } = req.params;
    const profile = await Applicants.findById(id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, the user doesn't have a profile"
      });
    }
    const job = await Jobs.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Oops, the job doesn't have a profile"
      });
    }
    const match = await Matches.applicantMatches(id, jobId);
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching matches"
    });
    throw new Error(error);
  }
});

router.get("/company/:id", async (req, res) => {
  try {
    const profile = await Companies.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, the user doesn't have a profile"
      });
    } else {
      const matches = await Matches.companyMatches(req.params.id);
      res.status(200).json(matches);
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching matches"
    });
    throw new Error(error);
  }
});

router.get("/job/:id/match/applicant/:applicantId", async (req, res) => {
  try {
    const { id, applicantId } = req.params;
    const profile = await Applicants.findById(applicantId);
    if (!profile) {
      return res.status(404).json({
        message: "Oops, the user doesn't have a profile"
      });
    }
    const job = await Jobs.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Oops, the job doesn't have a profile"
      });
    }
    const match = await Matches.jobMatch(id, applicantId);
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching matches"
    });
    throw new Error(error);
  }
});

module.exports = router;
