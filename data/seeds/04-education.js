exports.seed = function(knex, Promise) {
  return knex("education").insert([
    {
      applicantId: 1,
      eduSchool: "Cleveland State University",
      eduDegree: "Bachelor of Science in Computer Engineering",
      eduDescription:
        "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
      eduStartDate: "4-23-2016",
      eduEndDate: "4-23-2020"
    },
    {
      applicantId: 2,
      eduSchool: "Laambda School",
      eduDegree: "Full Stack Web Development & Computer Science",
      eduDescription:
        "Lambda School is a 6+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, software engineering, and web development.",
      eduStartDate: "1-4-2018",
      eduEndDate: "7-4-2018"
    },
    {
      applicantId: 3,
      eduSchool: "The University of Akron",
      eduDegree: "Bachelor of Science in Computer Science and Engineering",
      eduDescription:
        "Students develop skills to program and use computational techniques to solve problems. Topics include the notion of computation, Python, simple algorithms and data structures, testing and debugging, and algorithmic complexity.",
      eduStartDate: "1-1-2014",
      eduEndDate: "1-1-2018"
    }
  ]);
};
