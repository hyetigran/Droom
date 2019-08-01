exports.seed = function(knex, Promise) {
  return knex("experience").insert([
    {
      applicantId: 1,
      expTitle: "Junior Software Engineer",
      expCompany: "Apple",
      expDescription:
        "Responsibilities include Front-end UI development, Back-end management.",
      expStartDate: "5-23-2016",
      expEndDate: "4-23-2017"
    },
    {
      applicantId: 2,
      expTitle: "Senior Software Engineer",
      expCompany: "GitHub",
      expDescription: "Lead a team of engineers creating scalable APIs",
      expStartDate: "1-15-2018",
      expEndDate: "4-23-2022"
    },
    {
      applicantId: 3,
      expTitle: "Software Engineer",
      expCompany: "Microsoft",
      expDescription: "Software Engineer at Microsoft Cloud Database team.",
      expStartDate: "2-2-2018",
      expEndDate: "Present"
    }
  ]);
};
