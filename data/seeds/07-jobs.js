exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("jobs").insert([
    {
      id: 1,
      companyId: 1,
      jobName: "Frontend Software Engineer",
      jobDescription:
        "Are you excited by the prospect of creating simple, intuitive experiences that delight users? Do you like building services that will be used by hundreds of millions of users across the world? Microsoft Developer Center Norway is growing, and we’re looking for developers with a strong passion for building delightful and smart experiences that will be used on a global scale. Come join our team!",
      jobExperienceRequired:
        "Masters or Bachelor’s degree or equivalent in computer science or related technical disciplines.</li><li>Experience with software engineering best practices (code quality, repo hygiene, code reviews, unit testing, design documentation, continuous integration, deployment).</li><li>Experience in the JavaScript ecosystem and related technologies such as React, React Native, TypeScript, Redux, HTML5, CSS.</li></ul>",
      jobExperiencePreferred:
        "Experience in building performant experiences using technologies such as webpack and npm to optimize bundles and package dependencies.Experience in experimentation framework and understanding how to measure end user success.Thrives in dynamic, fast-paced environments where passion for customer engagement and great experience are at the forefront of all design & development.",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 2,
      companyId: 2,
      jobName: "Frontend Software Engineer",
      jobDescription:
        "As a Front End Engineer you will be responsible for building the next generation of client side user experiences for our industry leading Music Subscription service. We are a team that conceptualizes, iterates, and executes new features on an ongoing basis, which contributes to an overall dynamic and creative atmosphere.We need a highly motivated and skillful engineer with JavaScript programming proficiency, plus a solid grasp of the performance and compatibility issues that arise when delivering a comprehensive web solution. Attention to detail and a dedication to deliver a high-quality, stable delivery is essential. To be successful you are self-motivated; driven to achieve and exceed commitments. You also need to exude strong collaboration skills, including the ability to mentor and be mentored. Possess a strong passion to work in a growing, energizing environment of innovation. If you want to be part of this amazing team, this position is for you.",
      jobExperienceRequired:
        "<ul><li>Proficient JavaScript programmer</li><li>Experience with JS frameworks is highly desirable: React, Angular, etc.</li><li>Experience with CSS3 and Less/Sass in large scale applications</li></ul>",
      jobExperiencePreferred:
        "<ul><li>Knowledge of media streaming, HTML5 MSE/EME, encryption standards a plus</li><li>Strong problem solving and critical thinking skills</li><li>Passion for quality and close attention to details</li></ul>",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 3,
      companyId: 3,
      jobName: "Software Engineer",
      jobDescription:
        "GitHub is looking for an engineer to join a growing team focused on building and extending our platform primitives within our Ecosystem group. This team is responsible for developing and expanding the availability of realtime data, as well as building on top of our REST and GraphQL APIs to receive and deliver data quickly and efficiently. In this role, you’ll work among a team of remote engineers to take ownership of existing platform primitives, as well as work cross-functionally to build completely new systems. You will collaborate closely with our API, Data and Product teams to start and deliver impactful projects that grow GitHub’s Ecosystem. We work mainly in Ruby, Go and Java, but you will have the opportunity to use the technologies necessary to build powerful, resilient and robust primitives. The Engineering organization is highly distributed and you will thrive in an environment of remote work and asynchronous communication. As a member of our team, you’ll always be challenged to solve interesting and novel problems that have real impact on how the world builds software.",
      jobExperienceRequired:
        "<ul><li>5+ years building web services at scale</li><li>Experience with Git and GitHub</li><li>Experience with queueing and streaming systems like Kafka, RabbitMQ, etc</li></ul>",
      jobExperiencePreferred:
        "<ul><li>You have used GraphQL in production environments</li><li>You have experience working with Ruby and/or Go</li><li>You have worked on distributed teams</li></ul>",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 4,
      companyId: 1,
      jobName: "C++ Architect",
      jobDescription:
        "As a member of the project team, you will need to meet coding deliverables in line with project release plan, lead teams of C++ developers across one or more projects, and drive a culture of Test Driven Development across your project team members.",
      jobExperienceRequired:
        "<ul><li>Five or more years of application architecture and/or product development experience.</li><li>Experience in application design and design/delivery of complex integrated solutions.</li><li>Strong experience with C++ Development</li></ul>",
      jobExperiencePreferred:
        "<ul><li>Experienced in 3 tier architectures, strong experience in designing and re-platforming enterprise applications</li><li>The role requires explaining solutions to business teams. Experience in role bridging IT and Business is a great plus</li><li>Experience and maturity to deal and negotiate with senior business executives is required to be successful in this role</li></ul>",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 5,
      companyId: 2,
      jobName: "Full Stack Engineer",
      jobDescription:
        "At Netflix, we are shaping the future of global entertainment bringing moments of joy to 100+ million customers. The Employee Applications team is focused on building enterprise technology solutions for our employees to find the right information quickly and with ease to keep the business functioning smoothly. We are looking for a strong full stack engineer who has experience building web and mobile applications for enterprise and consumers. You will help design, build and maintain scalable applications and build the API infrastructure that can be used across all employee applications products. You have experience working closely with third party vendors, Netflix engineering teams and business stakeholders to build these end-to-end solution.",
      jobExperienceRequired:
        "<ul><li>Senior-level full stack engineer with 5+ years of experience</li><li>Proficient in HTML 5, CSS, and JavaScript frameworks, like React, AngularJS, or Ember</li><li>Strong in Java experience, proficiency with Ruby on rails OR another object oriented programming language</li></ul>",
      jobExperiencePreferred:
        "<ul><li>Experience integrating with internal and third party solutions</li><li>Strong data structures, algorithms and design patterns knowledge</li><li>Demonstrable ability to work across multiple teams to deliver an end product</li></ul>",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 6,
      companyId: 3,
      jobName: "Backend Engineer",
      jobDescription:
        "As a developer, you will engage with highly motivated and wonderful software developers, data scientists, network architects, and client engineers. As part of the team, join with hardworking engineers on enhancing Twitter’s Edge initiatives. You will have ample opportunities to both learn, teach, and grow. You will be expected to lead some efforts while offering support for others. We collaborate to bring out the best in each other. The services you create and operate will play a key role in Twitter user satisfaction and growth. Existing customers will immediately benefit from this work, and many more new customers worldwide will follow. You will empower people to connect and communicate.",
      jobExperienceRequired:
        "<ul><li>Are passionate about building massively scalable systems.</li><li>Have a growth mindset and the belief that your skills and abilities can be developed.</li><li>Have a track record of taking on and delivering solutions to significant distributed systems problems.</li></ul>",
      jobExperiencePreferred:
        "<ul><li>Network protocols: IPv6, CDN, DNS</li><li>Strong data structures, algorithms and design patterns knowledge</li><li>Development on the JVM</li></ul>",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 7,
      companyId: 1,
      jobName: "Software Engineer",
      jobDescription:
        "We are looking for Web Engineers to join our Free Product engineering organization. Our team is charged with scaling Spotify’s Free Product. Your work will impact our 100 million active users and millions of artists either by working directly on product features or publishing and insight tools. You will work with members of your team to build features and scalable architecture for web applications and services within Spotify. The technologies you are familiar with are less important to us than your ability to demonstrate practical experience of web application development, such as agile engineering methods backed by a deep understanding of software engineering best practices.",
      jobExperienceRequired:
        "<ul><li>You have at least 3+ years of experience in Web Development</li><li>You are experienced with modern JavaScript coding, testing, debugging, and automation techniques</li><li>You are comfortable working in an agile environment, and are comfortable challenging yourself and your team to improve their ways of working</li></ul>",
      jobExperiencePreferred:
        "<ul><li>You are adaptable and inventive and you are able to develop effective solutions to problems</li><li>You care deeply about web technologies, business impact, usability, design and music</li><li>You have excellent analytical and problem-solving skills, and can communicate your ideas, especially to those not technologically proficient</li></ul>",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 8,
      companyId: 2,
      jobName: "Frontend Engineer",
      jobDescription:
        "Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together. Whether we're creating new products or helping a small business expand its reach, people at Facebook are builders at heart. Our global teams are constantly iterating, solving problems, and working together to empower people around the world to build community and connect in meaningful ways. Together, we can help people build stronger communities - we're just getting started. Are you interested in building products used by more than a billion people? Do you like shipping code at a rapid pace? Facebook is seeking an experienced Front End Engineer that is passionate about building mobile and desktop web applications. This position is full-time and is based in our Washington D.C. office.",
      jobExperienceRequired:
        "<ul><li>5+ years of JavaScript experience, including concepts like asynchronous programming, closures, types, and ES6</li><li>5+ years of HTML/CSS experience, including concepts like layout, specificity, cross browser compatibility, and accessibility</li><li>5+ years experience with browser APIs and optimizing front end performance</li></ul>",
      jobExperiencePreferred:
        "<ul><li>Experience with React</li><li>BS/MS in Computer Science or a related technical field</li></ul>",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 9,
      companyId: 3,
      jobName: "Senior Frontend Engineer",
      jobDescription:
        "As a Reddit Frontend Engineer, you will create delightful web experiences for hundreds of millions of users around the world. This is a unique opportunity to leave your mark on one of the most influential and trafficked corners of the internet. You’ll own the front-end development for one or more projects and tackle tough design and product problems alongside other world-class engineers. Our frontend team uses the latest web technologies and we’ll need your expertise to keep us at the cutting-edge by rapidly developing beautiful, fast, and secure experiences for our users.",
      jobExperienceRequired:
        "<ul><li>5+ years of experience building clean, maintainable, and well-tested code.</li><li>Expertise in Javascript and Node.js. (React and Redux experience a plus).</li><li>Experience with Python or another server-side scripting language. Great engineering skills and strong CS fundamentals.</li></ul>",
      jobExperiencePreferred:
        "<ul><li>Excellent collaborative and communication skills.</li><li>Able to work effectively under schedule pressure to fix defects, review code, design, write, test new code, and diagnose production issues.</li></ul>",
      jobApplyBy: "30 May 2019"
    },
    {
      id: 10,
      companyId: 1,
      jobName: "Senior Backend Engineer",
      jobDescription:
        "Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.",
      jobExperienceRequired:
        "<ul><li>BS degree in Computer Science, a related technical field, or equivalent practical experience.</li><li>Software development experience in one or more general purpose programming languages.</li><li>Experience working with two or more from the following: web application development, Unix/Linux environments, mobile application development, distributed and parallel systems, machine learning, information retrieval, natural language processing, networking, developing large software systems, and/or security software development.</li><li>Working proficiency and communication skills in verbal and written English.</li></ul>",
      jobExperiencePreferred:
        "<ul><li>Master’s, PhD degree, further education or experience in engineering, computer science or a related technical field.</li><li>Experience with one or more general purpose programming languages, including but not limited to: Java, C/C++, C#, Objective-C, Python, JavaScript, or Go.</li><li>Interest and ability to learn other coding languages as needed.</li></ul>",
      jobApplyBy: "30 May 2019"
    }
  ]);
};
