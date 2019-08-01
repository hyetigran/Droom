exports.seed = function(knex, Promise) {
  return knex("experience").insert([
    {
      seekerId: 1,
      jobTitle: "Junior Software Engineer",
      jobCompany: "Apple",
      jobDescription:
        "Responsibilities include Front-end UI development, Back-end management.",
      jobStart: "5-23-2016",
      jobEnd: "4-23-2017"
    },
    {
      seekerId: 2,
      jobTitle: "Senior Software Engineer",
      jobCompany: "GitHub",
      jobDescription: "Lead a team of engineers creating scalable APIs",
      jobStart: "1-15-2018",
      jobEnd: "4-23-2022"
    },
    {
      seekerId: 3,
      jobTitle: "Software Engineer",
      jobCompany: "Microsoft",
      jobDescription: "Software Engineer at Microsoft Cloud Database team.",
      jobStart: "2-2-2018",
      jobEnd: "Present"
    }
  ]);
};
