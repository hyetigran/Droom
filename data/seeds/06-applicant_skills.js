exports.seed = function(knex, Promise) {
  return knex("seeker_skills").insert([
    {
      seekerId: 1,
      seekerSkill: "Golang"
    },
    {
      seekerId: 1,
      seekerSkill: "JavaScript"
    },
    {
      seekerId: 1,
      seekerSkill: "PHP"
    },
    {
      seekerId: 1,
      seekerSkill: "HTML"
    },
    {
      seekerId: 1,
      seekerSkill: "CSS"
    },
    {
      seekerId: 1,
      seekerSkill: "Git"
    },
    {
      seekerId: 2,
      seekerSkill: "Golang"
    },
    {
      seekerId: 2,
      seekerSkill: "Python"
    },
    {
      seekerId: 2,
      seekerSkill: "JavaScript"
    },
    {
      seekerId: 2,
      seekerSkill: "Node"
    },
    {
      seekerId: 2,
      seekerSkill: "Express"
    },
    {
      seekerId: 2,
      seekerSkill: "C++"
    },
    {
      seekerId: 2,
      seekerSkill: "MySQL"
    },
    {
      seekerId: 2,
      seekerSkill: "PostgreSQL"
    },
    {
      seekerId: 2,
      seekerSkill: "HTML"
    },
    {
      seekerId: 2,
      seekerSkill: "Git"
    },
    {
      seekerId: 2,
      seekerSkill: "React"
    },
    {
      seekerId: 2,
      seekerSkill: "CSS"
    },
    {
      seekerId: 2,
      seekerSkill: "Django"
    },
    {
      seekerId: 2,
      seekerSkill: "Redux"
    },
    {
      seekerId: 2,
      seekerSkill: "Webpack"
    },
    {
      seekerId: 2,
      seekerSkill: "Git"
    },
    {
      seekerId: 3,
      seekerSkill: "Java"
    },
    {
      seekerId: 3,
      seekerSkill: "Spring Framework"
    },
    {
      seekerId: 3,
      seekerSkill: "React"
    },
    {
      seekerId: 3,
      seekerSkill: "MySQL"
    },
    {
      seekerId: 3,
      seekerSkill: "PostgreSQL"
    },
    {
      seekerId: 3,
      seekerSkill: "Ruby"
    }
  ]);
};
