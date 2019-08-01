exports.seed = function(knex, Promise) {
  return knex("applicant_skills").insert([
    {
      applicantId: 1,
      applicantSkill: "Golang"
    },
    {
      applicantId: 1,
      applicantSkill: "JavaScript"
    },
    {
      applicantId: 1,
      applicantSkill: "PHP"
    },
    {
      applicantId: 1,
      applicantSkill: "HTML"
    },
    {
      applicantId: 1,
      applicantSkill: "CSS"
    },
    {
      applicantId: 1,
      applicantSkill: "Git"
    },
    {
      applicantId: 2,
      applicantSkill: "Golang"
    },
    {
      applicantId: 2,
      applicantSkill: "Python"
    },
    {
      applicantId: 2,
      applicantSkill: "JavaScript"
    },
    {
      applicantId: 2,
      applicantSkill: "Node"
    },
    {
      applicantId: 2,
      applicantSkill: "Express"
    },
    {
      applicantId: 2,
      applicantSkill: "C++"
    },
    {
      applicantId: 2,
      applicantSkill: "MySQL"
    },
    {
      applicantId: 2,
      applicantSkill: "PostgreSQL"
    },
    {
      applicantId: 2,
      applicantSkill: "HTML"
    },
    {
      applicantId: 2,
      applicantSkill: "Git"
    },
    {
      applicantId: 2,
      applicantSkill: "React"
    },
    {
      applicantId: 2,
      applicantSkill: "CSS"
    },
    {
      applicantId: 2,
      applicantSkill: "Django"
    },
    {
      applicantId: 2,
      applicantSkill: "Redux"
    },
    {
      applicantId: 2,
      applicantSkill: "Webpack"
    },
    {
      applicantId: 2,
      applicantSkill: "Git"
    },
    {
      applicantId: 3,
      applicantSkill: "Java"
    },
    {
      applicantId: 3,
      applicantSkill: "Spring Framework"
    },
    {
      applicantId: 3,
      applicantSkill: "React"
    },
    {
      applicantId: 3,
      applicantSkill: "MySQL"
    },
    {
      applicantId: 3,
      applicantSkill: "PostgreSQL"
    },
    {
      applicantId: 3,
      applicantSkill: "Ruby"
    }
  ]);
};
