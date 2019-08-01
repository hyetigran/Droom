exports.seed = function(knex, Promise) {
  return knex("education").insert([
    {
      seekerId: 1,
      eduSchool: "Cleveland State University",
      eduCredential: "Bachelor of Science in Computer Engineering",
      eduDescription:
        "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
      eduStart: "4-23-2016",
      eduEnd: "4-23-2020"
    },
    {
      seekerId: 2,
      eduSchool: "Laambda School",
      eduCredential: "Full Stack Web Development & Computer Science",
      eduDescription:
        "Lambda School is a 6+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, software engineering, and web development.",
      eduStart: "1-4-2018",
      eduEnd: "7-4-2018"
    },
    {
      seekerId: 3,
      eduSchool: "The University of Akron",
      eduCredential: "Bachelor of Science in Computer Science and Engineering",
      eduDescription:
        "Students develop skills to program and use computational techniques to solve problems. Topics include the notion of computation, Python, simple algorithms and data structures, testing and debugging, and algorithmic complexity.",
      eduStart: "1-1-2014",
      eduEnd: "1-1-2018"
    }
  ]);
};
