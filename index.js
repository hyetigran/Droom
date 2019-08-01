const express = require("express");

const serverMiddleware = require("./config/serverMiddleware");
const authenticate = require("./middleware/authenticate");

const authController = require("./controller/auth");
const applicantsController = require("./controller/applicants");
const educationController = require("./controller/education");
const experienceController = require("./controller/experience");
const companiesController = require("./controller/companies");
const jobsController = require("./controller/jobs");
const jobSkillsController = require("./controller/jobSkills");
const matchesController = require("./controller/matches");
const matchedController = require("./controller/matched");
const applicantSkillsController = require("./controller/applicantSkills");

const app = express();

serverMiddleware(app);

app.use("/api/auth", authController);
app.use("/api/applicants", authenticate, applicantsController);
app.use("/api/applicant-skills", authenticate, applicantSkillsController);
app.use("/api/education", authenticate, educationController);
app.use("/api/experience", authenticate, experienceController);
app.use("/api/companies", authenticate, companiesController);
app.use("/api/jobs", authenticate, jobsController);
app.use("/api/job-skills", authenticate, jobSkillsController);
app.use("/api/matches", authenticate, matchesController);
app.use("/api/matched", authenticate, matchedController);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Droom" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
