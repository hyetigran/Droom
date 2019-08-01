const db = require("../data/dbConfig");
const Jobs = require("./Jobs");
const Applicants = require("./Applicants");
const ApplicantsSkills = require("./ApplicantSkills");
const Companies = require("./Companies");

const seekerMatches = async id => {
  let applicant = await Applicants.findById(id);

  let applicantSkills = await ApplicantSkills.findApplicant(id);

  let arraySkills = await applicantSkills.map(skill => {
    return skill.applicantSkill;
  });

  let jobs = await Jobs.findAll();

  //Return recommended jobs based off count
  let updatedJobs = jobs.map(job => {
    let count = 0;
    job.jobSkills.forEach(skill => {
      if (arraySkills.includes(skill.jobSkill)) {
        count++;
      }
    });
    return { ...job, count };
  });

  let matches = await db("matches").where({
    applicantId: applicant.id,
    matched: true
  });
  let mappedMatches = matches.map(match => match.jobId);

  let filteredJobs = updatedJobs.filter(job => {
    return !mappedMatches.includes(job.id);
  });

  // Sort updated jobs based on count
  return filteredJobs.sort((a, b) => b.count - a.count);
};

const companyMatches = async id => {
  // Find company based on user id
  let company = await Companies.findById(id);

  // Find all skills for all jobs and make a new array for each job
  let arrayJobSkills = await company.jobs.map(job => {
    let mappedSkills = job.jobSkills.map(skill => {
      return skill.jobSkill;
    });
    return { skills: mappedSkills, jobId: job.id };
  });

  // Find all applicants
  let applicants = await Applicants.findAll();

  // Find all applicants based on applicant id and stitch the skills in with the rest of the object
  let profiles = await Promise.all(
    applicants.map(async applicant => {
      const applicantSkills = await db("applicant_skills").where({
        applicantId: applicant.id
      });
      return { ...applicant, applicantSkills };
    })
  );

  //For each job's skills, search the array of applicant skills and increment count
  let updatedProfiles = await arrayJobSkills.map(job => {
    let updatedApplicantCount = arrayApplicantSkills.map(applicant => {
      let count = 0;
      applicant.skills.forEach(skill => {
        if (job.skills.includes(skill)) {
          count++;
        }
      });
      let udpatedUser = {
        ...applicant,
        jobId: job.jobId,
        count
      };
      return updatedUser;
    });
    return updatedApplicantCount;
  });

  //Finds applicant based on applicant id
  let stichedProfiles = await Promise.all(
    updatedProfiles[0].map(async countProfile => {
      let profile = await Applicants.findById(countProfile.applicantId);
      let stiched = {
        ...countProfile,
        profile
      };
      return stiched;
    })
  );
  let matches = await db("matches").where({ matched: true });

  //For each matche check if matches any profile; filter on match
  for (let i = 0; i < matches.length; i++) {
    let unmatched = [];
    for (let j = 0; j < stichedProfiles.length; j++) {
      if (
        matches[i].jobId !== stichedProfiles[j].jobId ||
        matches[i].applicantId !== stichedProfiles[j].applicantId
      ) {
        unmatched.push(stichedProfiles[j]);
      }
    }
    // Sort the applicant profiles in desc. order
    let sortedProfiles = unmached.sort((a, b) => b.count - a.count);
    return sortedProfiles;
  }
};

const applicantMatch = async (userId, jobId) => {
  let { id } = await db("applicants")
    .where({ userId })
    .first()
    .returning("id");
  let matched = await db("matches")
    .where({ applicantId: id, jobId })
    .first();

  if (matched && matched.jobMatch) {
    const udpateMatched = {
      jobId,
      applicantId: id,
      applicantMatch: true,
      jobMatch: true,
      matched: true
    };
    return await db("matches")
      .where({ applicantId: id, jobId })
      .update(updateMatched);
  } else if (matched && matched.applicantMatch) {
    return "Match already exists";
  } else {
    const createMatch = {
      jobId,
      applicantId: id,
      applicantMatch: true,
      jobMatch: false,
      matched: false
    };
    return await db("matches")
      .where({ applicantId: id, jobId })
      .insert(createMatch);
  }
};

const jobMatch = async (jobId, applicantId) => {
  let matched = await db("matches")
    .where({ jobId, applicantId })
    .first();

  if (matched && matched.applicantMatch) {
    const updateMatched = {
      jobId,
      applicantId,
      applicantMatch: true,
      jobMatch: true,
      matched: true
    };
    return await db("matches")
      .where({ jobId, applicantId })
      .update(updateMatched);
  } else if (matched && matched.jobMatch) {
    return "Match already exists";
  } else {
    const createMatch = {
      jobId,
      applicantId,
      applicantMatch: false,
      jobMatch: true,
      matched: false
    };
    return await db("matches")
      .where({ jobId, applicantId })
      .insert(createMatch);
  }
};

module.exports = {
  applicantMatches,
  companyMatches,
  applicantMatch,
  jobMatch
};
