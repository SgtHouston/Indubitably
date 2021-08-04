'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        firstName: "Chris",
        lastName: "Houston",
        email: "chris@gmail.com",
        password: "$2b$10$lckZd00HJSQ108w2va4uuOTC9Ly.3k1fvKc.vaBrq8sftLWEESDo.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    ], {});



    await queryInterface.bulkInsert('Locations', [
      {
        city: "New York",
        state: "NY",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: "Los Angeles",
        state: "CA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: "Atlanta",
        state: "GA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: "San Francisco",
        state: "CA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: "Denver",
        state: "CO",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: "Seattle",
        state: "WA",
        createdAt: new Date(),
        updatedAt: new Date()
      }



  ], {});

    await queryInterface.bulkInsert('Jobs', [{
      title: "Full-Stack Developer",
      company: "TechSolutions",
      LocationId: 1,
      salary: "From $68,000 a year to $90,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
      createdAt: new Date(),
      updatedAt: new Date()
  }, 
  {
      title: "Backend Engineer",
      company: "FadeBook",
      LocationId: 1,
      salary: "From $50,000 a year to $75,000",
      summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
      long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Frontend Developer",
      company: "Wall Street Tech",
      LocationId: 1,
      salary: "From $90,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Snoogle",
      LocationId: 1,
      salary: "From $90,000 a year to $130,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Engineer",
      company: "City Electric Co",
      LocationId: 1,
      salary: "From $80,000 a year",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSTAR",
      LocationId: 1,
      salary: "From $70,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "CNSI",
      LocationId: 1,
      salary: "From $70,000 a year to $125,000",
      summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
      long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full Stack Engineer ",
      company: "Amazon",
      LocationId: 1,
      salary: "From $70,000 a year to $125,000",
      summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Digital Intelligence Systems LLC",
      LocationId: 1,
      salary: "From $70,000 a year to $125,000",
      summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  
      {
      title: "Backend Developer",
      company: "SortTech (Sortation Technology)",
      LocationId: 1,
      salary: "From $70,000 a year to $125,000",
      summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
      long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
      updatedAt: new Date()
      },
  {
      title: "Backend Developer",
      company: "Digital-Crafts",
      LocationId: 1,
      salary: "From $90,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.  ",
      long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full-Stack Developer",
      company: "Southern Container",
      LocationId: 1,
      salary: "From $85,000 a year to $125,000",
      summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "West Rock",
      LocationId: 1,
      salary: "From $150,000 a year to $185,000",
      summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "TECH Solutions ",
      LocationId: 1,
      salary: "From $60,000 a year to $155,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
      long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "Amazon",
      LocationId: 1,
      salary: "From $70,000 a year to $125,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
      long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      title: "Backend Developer",
      company: "DigitalCrafts",
      LocationId: 5,
      salary: "From $68,000 a year to $90,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "FadeBook",
      LocationId: 5,
      salary: "From $50,000 a year to $75,000",
      summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
      long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Wall Street Tech",
      LocationId: 5,
      salary: "From $90,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Snoogle",
      LocationId: 5,
      salary: "From $90,000 a year to $130,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 5,
      salary: "From $80,000 a year",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 5,
      salary: "From $70,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "CNSI",
      LocationId: 5,
      salary: "From $70,000 a year to $125,000",
      summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
      long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full Stack Engineer ",
      company: "Amazon",
      LocationId: 5,
      salary: "From $70,000 a year to $125,000",
      summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Digital Intelligence Systems LLC",
      LocationId: 5,
      salary: "From $70,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  
      {
      title: "Backend Developer",
      company: "SortTech (Sortation Technology)",
      LocationId: 5,
      salary: "From $70,000 a year to $125,000",
      summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
      long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
      updatedAt: new Date()
      },
  {
      title: "Backend Developer",
      company: "Digital-Crafts",
      LocationId: 5,
      salary: "From $90,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full-Stack Developer",
      company: "Southern Container",
      LocationId: 5,
      salary: "From $85,000 a year to $125,000",
      summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "West Rock",
      LocationId: 5,
      salary: "From $150,000 a year to $185,000",
      summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "TECH Solutions ",
      LocationId: 5,
      salary: "From $60,000 a year to $155,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
      long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "Amazon",
      LocationId: 5,
      salary: "From $70,000 a year to $125,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
      long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      title: "Backend Developer",
      company: "TechSolutions",
      LocationId: 2,
      salary: "From $68,000 a year to $90,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "FadeBook",
      LocationId: 2,
      salary: "From $50,000 a year to $75,000",
      summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
      long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Wall Street Tech",
      LocationId: 2,
      salary: "From $90,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Snoogle",
      LocationId: 2,
      salary: "From $90,000 a year to $130,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 2,
      salary: "From $80,000 a year",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 2,
      salary: "From $70,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "CNSI",
      LocationId: 2,
      salary: "From $70,000 a year to $125,000",
      summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
      long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full Stack Engineer ",
      company: "Amazon",
      LocationId: 2,
      salary: "From $70,000 a year to $125,000",
      summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Digital Intelligence Systems LLC",
      LocationId: 2,
      salary: "From $70,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  
      {
      title: "Backend Developer",
      company: "SortTech (Sortation Technology)",
      LocationId: 2,
      salary: "From $70,000 a year to $125,000",
      summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
      long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
      updatedAt: new Date()
      },
  {
      title: "Backend Developer",
      company: "Digital-Crafts",
      LocationId: 2,
      salary: "From $90,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full-Stack Developer",
      company: "Southern Container",
      LocationId: 2,
      salary: "From $85,000 a year to $125,000",
      summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "West Rock",
      LocationId: 2,
      salary: "From $150,000 a year to $185,000",
      summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "TECH Solutions ",
      LocationId: 2,
      salary: "From $60,000 a year to $155,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
      long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "Amazon",
      LocationId: 2,
      salary: "From $70,000 a year to $125,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
      long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      title: "Backend Developer",
      company: "TechSolutions",
      LocationId: 3,
      salary: "From $68,000 a year to $90,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "FadeBook",
      LocationId: 3,
      salary: "From $50,000 a year to $75,000",
      summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
      long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Wall Street Tech",
      LocationId: 3,
      salary: "From $90,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Snoogle",
      LocationId: 3,
      salary: "From $90,000 a year to $130,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 3,
      salary: "From $80,000 a year",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 3,
      salary: "From $70,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "CNSI",
      LocationId: 3,
      salary: "From $70,000 a year to $125,000",
      summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
      long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full Stack Engineer ",
      company: "Amazon",
      LocationId: 3,
      salary: "From $70,000 a year to $125,000",
      summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Digital Intelligence Systems LLC",
      LocationId: 3,
      salary: "From $70,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  
      {
      title: "Backend Developer",
      company: "SortTech (Sortation Technology)",
      LocationId: 3,
      salary: "From $70,000 a year to $125,000",
      summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
      long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
      updatedAt: new Date()
      },
  {
      title: "Backend Developer",
      company: "Digital-Crafts",
      LocationId: 3,
      salary: "From $90,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full-Stack Developer",
      company: "Southern Container",
      LocationId: 3,
      salary: "From $85,000 a year to $125,000",
      summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "West Rock",
      LocationId: 3,
      salary: "From $150,000 a year to $185,000",
      summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "TECH Solutions ",
      LocationId: 3,
      salary: "From $60,000 a year to $155,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
      long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "Amazon",
      LocationId: 3,
      salary: "From $70,000 a year to $125,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
      long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      title: "Backend Developer",
      company: "TechSolutions",
      LocationId: 4,
      salary: "From $68,000 a year to $90,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "FadeBook",
      LocationId: 4,
      salary: "From $50,000 a year to $75,000",
      summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
      long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Wall Street Tech",
      LocationId: 4,
      salary: "From $90,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Snoogle",
      LocationId: 4,
      salary: "From $90,000 a year to $130,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 4,
      salary: "From $80,000 a year",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 4,
      salary: "From $70,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "CNSI",
      LocationId: 4,
      salary: "From $70,000 a year to $125,000",
      summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
      long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full Stack Engineer ",
      company: "Amazon",
      LocationId: 4,
      salary: "From $70,000 a year to $125,000",
      summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Digital Intelligence Systems LLC",
      LocationId: 4,
      salary: "From $70,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  
      {
      title: "Backend Developer",
      company: "SortTech (Sortation Technology)",
      LocationId: 4,
      salary: "From $70,000 a year to $125,000",
      summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
      long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
      updatedAt: new Date()
      },
  {
      title: "Backend Developer",
      company: "Digital-Crafts",
      LocationId: 4,
      salary: "From $90,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full-Stack Developer",
      company: "Southern Container",
      LocationId: 4,
      salary: "From $85,000 a year to $125,000",
      summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "West Rock",
      LocationId: 4,
      salary: "From $150,000 a year to $185,000",
      summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "TECH Solutions ",
      LocationId: 4,
      salary: "From $60,000 a year to $155,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
      long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "Amazon",
      LocationId: 4,
      salary: "From $70,000 a year to $125,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
      long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      title: "Backend Developer",
      company: "TechSolutions",
      LocationId: 6,
      salary: "From $68,000 a year to $90,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "FadeBook",
      LocationId: 6,
      salary: "From $50,000 a year to $75,000",
      summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
      long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Wall Street Tech",
      LocationId: 6,
      salary: "From $90,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Snoogle",
      LocationId: 6,
      salary: "From $90,000 a year to $130,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 6,
      salary: "From $80,000 a year",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "TechSolutionsPlus",
      LocationId: 6,
      salary: "From $70,000 a year to $125,000",
      summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
      long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "CNSI",
      LocationId: 6,
      salary: "From $70,000 a year to $125,000",
      summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
      long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full Stack Engineer ",
      company: "Amazon",
      LocationId: 6,
      salary: "From $70,000 a year to $125,000",
      summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "Digital Intelligence Systems LLC",
      LocationId: 6,
      salary: "From $70,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  
      {
      title: "Backend Developer",
      company: "SortTech (Sortation Technology)",
      LocationId: 6,
      salary: "From $70,000 a year to $125,000",
      summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
      long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
      updatedAt: new Date()
      },
  {
      title: "Backend Developer",
      company: "Digital-Crafts",
      LocationId: 6,
      salary: "From $90,000 a year to $125,000",
      summary: " ",
      long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Full-Stack Developer",
      company: "Southern Container",
      LocationId: 6,
      salary: "From $85,000 a year to $125,000",
      summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer",
      company: "West Rock",
      LocationId: 6,
      salary: "From $150,000 a year to $185,000",
      summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
      long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "TECH Solutions ",
      LocationId: 6,
      salary: "From $60,000 a year to $155,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
      long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Backend Developer ",
      company: "Amazon",
      LocationId: 6,
      salary: "From $70,000 a year to $125,000",
      summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
      long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    title: "Full-Stack Engineer",
    company: "TechSolutions",
    LocationId: 1,
    salary: "From $68,000 a year to $90,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "FadeBook",
    LocationId: 1,
    salary: "From $50,000 a year to $75,000",
    summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
    long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Wall Street Tech",
    LocationId: 1,
    salary: "From $90,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Snoogle",
    LocationId: 1,
    salary: "From $90,000 a year to $130,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 1,
    salary: "From $80,000 a year",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 1,
    salary: "From $70,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "CNSI",
    LocationId: 1,
    salary: "From $70,000 a year to $125,000",
    summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
    long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full Stack Engineer ",
    company: "Amazon",
    LocationId: 1,
    salary: "From $70,000 a year to $125,000",
    summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Digital Intelligence Systems LLC",
    LocationId: 1,
    salary: "From $70,000 a year to $125,000",
    summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},

    {
    title: "Full-Stack Engineer",
    company: "SortTech (Sortation Technology)",
    LocationId: 1,
    salary: "From $70,000 a year to $125,000",
    summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
    long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
    updatedAt: new Date()
    },
{
    title: "Full-Stack Engineer",
    company: "Digital-Crafts",
    LocationId: 1,
    salary: "From $90,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.  ",
    long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Developer",
    company: "Southern Container",
    LocationId: 1,
    salary: "From $85,000 a year to $125,000",
    summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "West Rock",
    LocationId: 1,
    salary: "From $150,000 a year to $185,000",
    summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "TECH Solutions ",
    LocationId: 1,
    salary: "From $60,000 a year to $155,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
    long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "Amazon",
    LocationId: 1,
    salary: "From $70,000 a year to $125,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
    long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
    createdAt: new Date(),
    updatedAt: new Date()
},{
    title: "Full-Stack Engineer",
    company: "TechSolutions",
    LocationId: 5,
    salary: "From $68,000 a year to $90,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "FadeBook",
    LocationId: 5,
    salary: "From $50,000 a year to $75,000",
    summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
    long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Wall Street Tech",
    LocationId: 5,
    salary: "From $90,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Snoogle",
    LocationId: 5,
    salary: "From $90,000 a year to $130,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 5,
    salary: "From $80,000 a year",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 5,
    salary: "From $70,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "CNSI",
    LocationId: 5,
    salary: "From $70,000 a year to $125,000",
    summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
    long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full Stack Engineer ",
    company: "Amazon",
    LocationId: 5,
    salary: "From $70,000 a year to $125,000",
    summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Digital Intelligence Systems LLC",
    LocationId: 5,
    salary: "From $70,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},

    {
    title: "Full-Stack Engineer",
    company: "SortTech (Sortation Technology)",
    LocationId: 5,
    salary: "From $70,000 a year to $125,000",
    summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
    long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
    updatedAt: new Date()
    },
{
    title: "Full-Stack Engineer",
    company: "Digital-Crafts",
    LocationId: 5,
    salary: "From $90,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Developer",
    company: "Southern Container",
    LocationId: 5,
    salary: "From $85,000 a year to $125,000",
    summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "West Rock",
    LocationId: 5,
    salary: "From $150,000 a year to $185,000",
    summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "TECH Solutions ",
    LocationId: 5,
    salary: "From $60,000 a year to $155,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
    long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "Amazon",
    LocationId: 5,
    salary: "From $70,000 a year to $125,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
    long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
    createdAt: new Date(),
    updatedAt: new Date()
},{
    title: "Full-Stack Engineer",
    company: "TechSolutions",
    LocationId: 2,
    salary: "From $68,000 a year to $90,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "FadeBook",
    LocationId: 2,
    salary: "From $50,000 a year to $75,000",
    summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
    long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Wall Street Tech",
    LocationId: 2,
    salary: "From $90,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Snoogle",
    LocationId: 2,
    salary: "From $90,000 a year to $130,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 2,
    salary: "From $80,000 a year",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 2,
    salary: "From $70,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "CNSI",
    LocationId: 2,
    salary: "From $70,000 a year to $125,000",
    summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
    long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full Stack Engineer ",
    company: "Amazon",
    LocationId: 2,
    salary: "From $70,000 a year to $125,000",
    summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Digital Intelligence Systems LLC",
    LocationId: 2,
    salary: "From $70,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},

    {
    title: "Full-Stack Engineer",
    company: "SortTech (Sortation Technology)",
    LocationId: 2,
    salary: "From $70,000 a year to $125,000",
    summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
    long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
    updatedAt: new Date()
    },
{
    title: "Full-Stack Engineer",
    company: "Digital-Crafts",
    LocationId: 2,
    salary: "From $90,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Developer",
    company: "Southern Container",
    LocationId: 2,
    salary: "From $85,000 a year to $125,000",
    summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "West Rock",
    LocationId: 2,
    salary: "From $150,000 a year to $185,000",
    summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "TECH Solutions ",
    LocationId: 2,
    salary: "From $60,000 a year to $155,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
    long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "Amazon",
    LocationId: 2,
    salary: "From $70,000 a year to $125,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
    long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
    createdAt: new Date(),
    updatedAt: new Date()
},{
    title: "Full-Stack Engineer",
    company: "TechSolutions",
    LocationId: 3,
    salary: "From $68,000 a year to $90,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "FadeBook",
    LocationId: 3,
    salary: "From $50,000 a year to $75,000",
    summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
    long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Wall Street Tech",
    LocationId: 3,
    salary: "From $90,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Snoogle",
    LocationId: 3,
    salary: "From $90,000 a year to $130,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 3,
    salary: "From $80,000 a year",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 3,
    salary: "From $70,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "CNSI",
    LocationId: 3,
    salary: "From $70,000 a year to $125,000",
    summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
    long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full Stack Engineer ",
    company: "Amazon",
    LocationId: 3,
    salary: "From $70,000 a year to $125,000",
    summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Digital Intelligence Systems LLC",
    LocationId: 3,
    salary: "From $70,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},

    {
    title: "Full-Stack Engineer",
    company: "SortTech (Sortation Technology)",
    LocationId: 3,
    salary: "From $70,000 a year to $125,000",
    summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
    long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
    updatedAt: new Date()
    },
{
    title: "Full-Stack Engineer",
    company: "Digital-Crafts",
    LocationId: 3,
    salary: "From $90,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Developer",
    company: "Southern Container",
    LocationId: 3,
    salary: "From $85,000 a year to $125,000",
    summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "West Rock",
    LocationId: 3,
    salary: "From $150,000 a year to $185,000",
    summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "TECH Solutions ",
    LocationId: 3,
    salary: "From $60,000 a year to $155,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
    long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "Amazon",
    LocationId: 3,
    salary: "From $70,000 a year to $125,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
    long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
    createdAt: new Date(),
    updatedAt: new Date()
},{
    title: "Full-Stack Engineer",
    company: "TechSolutions",
    LocationId: 4,
    salary: "From $68,000 a year to $90,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "FadeBook",
    LocationId: 4,
    salary: "From $50,000 a year to $75,000",
    summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
    long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Wall Street Tech",
    LocationId: 4,
    salary: "From $90,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Snoogle",
    LocationId: 4,
    salary: "From $90,000 a year to $130,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 4,
    salary: "From $80,000 a year",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 4,
    salary: "From $70,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "CNSI",
    LocationId: 4,
    salary: "From $70,000 a year to $125,000",
    summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
    long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full Stack Engineer ",
    company: "Amazon",
    LocationId: 4,
    salary: "From $70,000 a year to $125,000",
    summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Digital Intelligence Systems LLC",
    LocationId: 4,
    salary: "From $70,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},

    {
    title: "Full-Stack Engineer",
    company: "SortTech (Sortation Technology)",
    LocationId: 4,
    salary: "From $70,000 a year to $125,000",
    summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
    long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
    updatedAt: new Date()
    },
{
    title: "Full-Stack Engineer",
    company: "Digital-Crafts",
    LocationId: 4,
    salary: "From $90,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Developer",
    company: "Southern Container",
    LocationId: 4,
    salary: "From $85,000 a year to $125,000",
    summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "West Rock",
    LocationId: 4,
    salary: "From $150,000 a year to $185,000",
    summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "TECH Solutions ",
    LocationId: 4,
    salary: "From $60,000 a year to $155,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
    long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "Amazon",
    LocationId: 4,
    salary: "From $70,000 a year to $125,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
    long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
    createdAt: new Date(),
    updatedAt: new Date()
},{
    title: "Full-Stack Engineer",
    company: "TechSolutions",
    LocationId: 6,
    salary: "From $68,000 a year to $90,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "FadeBook",
    LocationId: 6,
    salary: "From $50,000 a year to $75,000",
    summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
    long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Wall Street Tech",
    LocationId: 6,
    salary: "From $90,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Snoogle",
    LocationId: 6,
    salary: "From $90,000 a year to $130,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 6,
    salary: "From $80,000 a year",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "TechSolutionsPlus",
    LocationId: 6,
    salary: "From $70,000 a year to $125,000",
    summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
    long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "CNSI",
    LocationId: 6,
    salary: "From $70,000 a year to $125,000",
    summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
    long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "Amazon",
    LocationId: 6,
    salary: "From $70,000 a year to $125,000",
    summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Digital Intelligence Systems LLC",
    LocationId: 6,
    salary: "From $70,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
    createdAt: new Date(),
    updatedAt: new Date()
},

    {
    title: "Full-Stack Engineer",
    company: "SortTech (Sortation Technology)",
    LocationId: 6,
    salary: "From $70,000 a year to $125,000",
    summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
    long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
    updatedAt: new Date()
    },
{
    title: "Full-Stack Engineer",
    company: "Digital-Crafts",
    LocationId: 6,
    salary: "From $90,000 a year to $125,000",
    summary: " ",
    long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "Southern Container",
    LocationId: 6,
    salary: "From $85,000 a year to $125,000",
    summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Full-Stack Engineer",
    company: "West Rock",
    LocationId: 6,
    salary: "From $150,000 a year to $185,000",
    summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
    long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "TECH Solutions ",
    LocationId: 6,
    salary: "From $60,000 a year to $155,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
    long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
    updatedAt: new Date()
},
{
    title: "Backend Developer ",
    company: "Amazon",
    LocationId: 6,
    salary: "From $70,000 a year to $125,000",
    summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
    long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
    createdAt: new Date(),
    updatedAt: new Date()
},{
  title: "Full-Stack Developer",
  company: "TechSolutions",
  LocationId: 1,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "FadeBook",
  LocationId: 1,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Wall Street Tech",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Snoogle",
  LocationId: 1,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Full-Stack Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Full-Stack Developer",
  company: "Digital-Crafts",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.  ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 1,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "West Rock",
  LocationId: 1,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 1,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Full-Stack Developer",
  company: "TechSolutions",
  LocationId: 5,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "FadeBook",
  LocationId: 5,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Wall Street Tech",
  LocationId: 5,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Snoogle",
  LocationId: 5,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 5,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Full-Stack Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Full-Stack Developer",
  company: "Digital-Crafts",
  LocationId: 5,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 5,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "West Rock",
  LocationId: 5,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 5,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Full-Stack Developer",
  company: "TechSolutions",
  LocationId: 2,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "FadeBook",
  LocationId: 2,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Wall Street Tech",
  LocationId: 2,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Snoogle",
  LocationId: 2,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 2,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Full-Stack Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Full-Stack Developer",
  company: "Digital-Crafts",
  LocationId: 2,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 2,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "West Rock",
  LocationId: 2,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 2,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Full-Stack Developer",
  company: "TechSolutions",
  LocationId: 3,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "FadeBook",
  LocationId: 3,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Wall Street Tech",
  LocationId: 3,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Snoogle",
  LocationId: 3,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 3,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Full-Stack Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Full-Stack Developer",
  company: "Digital-Crafts",
  LocationId: 3,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 3,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "West Rock",
  LocationId: 3,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 3,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Full-Stack Developer",
  company: "TechSolutions",
  LocationId: 4,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "FadeBook",
  LocationId: 4,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Wall Street Tech",
  LocationId: 4,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Snoogle",
  LocationId: 4,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 4,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Full-Stack Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Full-Stack Developer",
  company: "Digital-Crafts",
  LocationId: 4,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 4,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "West Rock",
  LocationId: 4,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 4,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Full-Stack Developer",
  company: "TechSolutions",
  LocationId: 6,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "FadeBook",
  LocationId: 6,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Wall Street Tech",
  LocationId: 6,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Snoogle",
  LocationId: 6,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 6,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "TechSolutionsPlus",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Full-Stack Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Full-Stack Developer",
  company: "Digital-Crafts",
  LocationId: 6,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 6,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "West Rock",
  LocationId: 6,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 6,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutions",
  LocationId: 1,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "FadeBook",
  LocationId: 1,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Wall Street Tech",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Snoogle",
  LocationId: 1,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Jr-Full-Stack Developer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital-Crafts",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.  ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Southern Container",
  LocationId: 1,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "West Rock",
  LocationId: 1,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 1,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutions",
  LocationId: 5,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "FadeBook",
  LocationId: 5,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Wall Street Tech",
  LocationId: 5,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Snoogle",
  LocationId: 5,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 5,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Jr-Full-Stack Developer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital-Crafts",
  LocationId: 5,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Southern Container",
  LocationId: 5,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "West Rock",
  LocationId: 5,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 5,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutions",
  LocationId: 2,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "FadeBook",
  LocationId: 2,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Wall Street Tech",
  LocationId: 2,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Snoogle",
  LocationId: 2,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 2,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Jr-Full-Stack Developer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital-Crafts",
  LocationId: 2,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Southern Container",
  LocationId: 2,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "West Rock",
  LocationId: 2,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 2,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutions",
  LocationId: 3,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "FadeBook",
  LocationId: 3,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Wall Street Tech",
  LocationId: 3,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Snoogle",
  LocationId: 3,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 3,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Jr-Full-Stack Developer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital-Crafts",
  LocationId: 3,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Southern Container",
  LocationId: 3,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "West Rock",
  LocationId: 3,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 3,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutions",
  LocationId: 4,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "FadeBook",
  LocationId: 4,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Wall Street Tech",
  LocationId: 4,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Snoogle",
  LocationId: 4,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 4,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Jr-Full-Stack Developer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital-Crafts",
  LocationId: 4,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Southern Container",
  LocationId: 4,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "West Rock",
  LocationId: 4,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 4,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutions",
  LocationId: 6,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "FadeBook",
  LocationId: 6,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Wall Street Tech",
  LocationId: 6,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Snoogle",
  LocationId: 6,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 6,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "TechSolutionsPlus",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Jr-Full-Stack Developer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Jr-Full-Stack Developer ",
  company: "Digital-Crafts",
  LocationId: 6,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "Southern Container",
  LocationId: 6,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Jr-Full-Stack Developer ",
  company: "West Rock",
  LocationId: 6,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 6,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "React Developer",
  company: "TechSolutions",
  LocationId: 1,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer",
  company: "FadeBook",
  LocationId: 1,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer",
  company: "Wall Street Tech",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer",
  company: "Snoogle",
  LocationId: 1,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer ",
  company: "CNSI",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "React Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "React Developer",
  company: "Digital-Crafts",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.  ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 1,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer",
  company: "West Rock",
  LocationId: 1,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer ",
  company: "TECH Solutions ",
  LocationId: 1,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "React Developer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Developer",
  company: "TechSolutions",
  LocationId: 1,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "FadeBook",
  LocationId: 1,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Wall Street Tech",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Snoogle",
  LocationId: 1,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Developer",
  company: "Digital-Crafts",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.  ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 1,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "West Rock",
  LocationId: 1,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 1,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Developer",
  company: "TechSolutions",
  LocationId: 5,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "FadeBook",
  LocationId: 5,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Wall Street Tech",
  LocationId: 5,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Snoogle",
  LocationId: 5,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 5,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Developer",
  company: "Digital-Crafts",
  LocationId: 5,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 5,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "West Rock",
  LocationId: 5,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 5,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Developer",
  company: "TechSolutions",
  LocationId: 2,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "FadeBook",
  LocationId: 2,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Wall Street Tech",
  LocationId: 2,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Snoogle",
  LocationId: 2,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 2,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Developer",
  company: "Digital-Crafts",
  LocationId: 2,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 2,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "West Rock",
  LocationId: 2,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 2,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Developer",
  company: "TechSolutions",
  LocationId: 3,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "FadeBook",
  LocationId: 3,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Wall Street Tech",
  LocationId: 3,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Snoogle",
  LocationId: 3,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 3,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Developer",
  company: "Digital-Crafts",
  LocationId: 3,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 3,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "West Rock",
  LocationId: 3,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 3,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Developer",
  company: "TechSolutions",
  LocationId: 4,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "FadeBook",
  LocationId: 4,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Wall Street Tech",
  LocationId: 4,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Snoogle",
  LocationId: 4,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 4,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Developer",
  company: "Digital-Crafts",
  LocationId: 4,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full-Stack Developer",
  company: "Southern Container",
  LocationId: 4,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "West Rock",
  LocationId: 4,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 4,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Developer",
  company: "TechSolutions",
  LocationId: 6,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "FadeBook",
  LocationId: 6,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Wall Street Tech",
  LocationId: 6,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Snoogle",
  LocationId: 6,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 6,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "TechSolutionsPlus",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Digital Intelligence Systems LLC",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Developer",
  company: "SortTech (Sortation Technology)",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Developer",
  company: "Digital-Crafts",
  LocationId: 6,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "Southern Container",
  LocationId: 6,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Developer",
  company: "West Rock",
  LocationId: 6,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 6,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Development Engineer ",
  company: "TechSolutions",
  LocationId: 1,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "FadeBook",
  LocationId: 1,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Wall Street Tech",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Snoogle",
  LocationId: 1,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Development Engineer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Development Engineer ",
  company: "Digital-Crafts",
  LocationId: 1,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.  ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Southern Container",
  LocationId: 1,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "West Rock",
  LocationId: 1,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 1,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 1,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Development Engineer ",
  company: "TechSolutions",
  LocationId: 5,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "FadeBook",
  LocationId: 5,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Wall Street Tech",
  LocationId: 5,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Snoogle",
  LocationId: 5,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 5,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Development Engineer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Development Engineer ",
  company: "Digital-Crafts",
  LocationId: 5,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Southern Container",
  LocationId: 5,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "West Rock",
  LocationId: 5,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 5,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 5,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Development Engineer ",
  company: "TechSolutions",
  LocationId: 2,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "FadeBook",
  LocationId: 2,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Wall Street Tech",
  LocationId: 2,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Snoogle",
  LocationId: 2,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 2,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Development Engineer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Development Engineer ",
  company: "Digital-Crafts",
  LocationId: 2,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Southern Container",
  LocationId: 2,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "West Rock",
  LocationId: 2,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 2,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 2,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Development Engineer ",
  company: "TechSolutions",
  LocationId: 3,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "FadeBook",
  LocationId: 3,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Wall Street Tech",
  LocationId: 3,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Snoogle",
  LocationId: 3,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 3,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Development Engineer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Development Engineer ",
  company: "Digital-Crafts",
  LocationId: 3,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Southern Container",
  LocationId: 3,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "West Rock",
  LocationId: 3,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 3,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 3,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Development Engineer ",
  company: "TechSolutions",
  LocationId: 4,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "FadeBook",
  LocationId: 4,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Wall Street Tech",
  LocationId: 4,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Snoogle",
  LocationId: 4,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 4,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Full Stack Engineer ",
  company: "Amazon",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Development Engineer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Development Engineer ",
  company: "Digital-Crafts",
  LocationId: 4,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Southern Container",
  LocationId: 4,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "West Rock",
  LocationId: 4,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 4,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 4,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
},{
  title: "Software Development Engineer ",
  company: "TechSolutions",
  LocationId: 6,
  salary: "From $68,000 a year to $90,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Create Data Change Requests (DCR) and Structural Change Requests (SCR) required for interface development.Create/ Debug SQL queries, PL/SQL Packages, Procedures and Functions.Provide Java based solutions to enhance existing Interface framework, or for custom Java based solutions.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "FadeBook",
  LocationId: 6,
  salary: "From $50,000 a year to $75,000",
  summary: "The role of the Associate SOA Developer is to support system design, develop and implement components of the application and program, and maintain and modify applications, programs, or system software. This role involves working under moderate supervision to design applications, functions, and programs ",
  long_description: "BASIC QUALIFICATIONS,Understand Interface specs and develop unit testing Interfaces using Oracle SOA Suite.Support System Integration testing (SIT), User Acceptance testing (UAT) and Performance testing of Interfaces.Create test files to support User Acceptance testing (UAT), ex. XML files.Support development, testing and integration of SOAPUI and REST based webservices.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Wall Street Tech",
  LocationId: 6,
  salary: "From $90,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Familiar with any of the following technologies:Oracle - Relational databases, PL/SQLJavaXML, XSD, XPATHWebLogic Application Server (version 12.1.2 and above)",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Snoogle",
  LocationId: 6,
  salary: "From $90,000 a year to $130,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Knowledge of Cloud based platform such as AWS (Amazon Web Services) or Oracle CloudExperience with Healthcare domainKnowledge of defect management system ex. JIRAKnowledge of version control system ex. SVN",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 6,
  salary: "From $80,000 a year",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS,Support Interface Operations and Interface deployment related activities.Create and maintain Integration related artifacts as needed by the project.Work under the guidance of Integration Lead/ Manager for the project.Keep Integration Lead/ Manager apprised of all Interface related activities, issues, and risks.",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "TechSolutionsPlus",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
  long_description: "BASIC QUALIFICATIONS, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "CNSI",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer.",
  long_description: "BASIC QUALIFICATIONS, · Master Degree or PhD in Computer Science or related field.8+ years experience leading the definition and development of multi tier web services4+ years experience leading development of applications backed by AWS services or using other cloud based technologies and services4+ years experience and knowledge in building large automated industrial systems4+ years working on Big data and highly scalable systemsDeep hands-on technical expertiseExcellent verbal and written communication skillsStrong business and technical visionAbility to handle multiple competing priorities in a fast-paced environmentA deep understanding of software development in a team, and a track record of shipping software on timeExceptional customer relationship skills including the ability to discover the true requirements, underlying feature requests, recommend alternative technical and business approaches, and lead engineering efforts to meet aggressive timelines with optimal solutions",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " As the manager, software development, you will be responsible for driving the technical direction for a large software system. You will be leading core product development to enable better visibility into performance of material handling equipment and software systems and enable innovation and process improvements on our fulfillment pipeline. You will also be responsible for working closely with other managers of software development teams within Amazon to lead changes through their systems. ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Digital Intelligence Systems LLC",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· 7+ years of experience working directly with engineering teamsExperience in partnering with product and program management teams3+ years of people management experience, managing engineersBachelor’s degree in Computer Science, Computer Engineering or related technical discipline7+ years of relevant engineering experience3+ years professional experience in managing software development teamsExperience with OOD and object oriented languages ",
  createdAt: new Date(),
  updatedAt: new Date()
},

  {
  title: "Software Development Engineer ",
  company: "SortTech (Sortation Technology)",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "Our team, SortTech (Sortation Technology), builds the technology that enables manual and automated sortation, containerization, loading and unloading processes at over 2k nodes in Amazon’s worldwide transportation network - Fulfillment Centers (FCs), IXDs (Inbound Receive Centers), Sort Centers (SCs), Amazon Air Gateways and Delivery Stations (DSs). We also build visibility platforms that enable operations managers to monitor and refine their volume, staffing and building configurations to optimize their operational processes. ",
  long_description: "BASIC QUALIFICATIONS, Bachelor’s degree or higher in Computer Science, Engineering or related field 7+ years professional experience in commercial or web- scale system software development and deliveryProven object - oriented design and implementation skills(Java, and / or C++) Proven understanding of scalable computing systems, software architecture, data structures and algorithms Proficient in network, distributed, asynchronous and concurrent programming Experience designing, building and delivering high quality software on time Solid verbal and written communication skills", createdAt: new Date(),
  updatedAt: new Date()
  },
{
  title: "Software Development Engineer ",
  company: "Digital-Crafts",
  LocationId: 6,
  salary: "From $90,000 a year to $125,000",
  summary: " ",
  long_description: "BASIC QUALIFICATIONS,· Knowledge of professional software engineering best practices for the full software development life cycle including: coding standards, code reviews, source control management, build processes, testing, deploying, debugging, and maintaining code.Experience with performance benchmarking and optimizationFamiliarity with cloud message APIs and push notificationsFamiliarity with continuous integrationAble to work in a diverse team ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Development Engineer ",
  company: "Southern Container",
  LocationId: 6,
  salary: "From $85,000 a year to $125,000",
  summary: "Southern Container is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· Knack for benchmarking and optimizationProficient understanding of code versioning tools such as GitFamiliarity with continuous integrationInterest in developing original solutions to UI problems involving vector graphics, animations, and themingDesire to completely own a project from start to finishExperience setting up and running instrumentation tests using cloud servicesExperience working on design systemsPrevious experience creating reusable component librariesExperience with Agile and Scrum methodologiesExperience with WCAG 2.1 Accessibility GuidelinesExperience working on iOS and/or Android frameworks ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Software Engineer ",
  company: "West Rock",
  LocationId: 6,
  salary: "From $150,000 a year to $185,000",
  summary: " Transportation & Recipient Experience (TRX) is the multidisciplinary design studio responsible for envisioning and delivering end-to-end, customer-focused solutions across the ecosystem of products that power Amazon’s global Transportation, Shipping, and Seller Services.",
  long_description: "BASIC QUALIFICATIONS,· 5+ years of industry experience as an engineerExperience developing responsive web experiencesKnowledge of design patterns, algorithms, object-oriented programming, and front-end development best practicesProficiency developing Web experiences with ReactBasic knowledge of UI/UX standards ",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "TECH Solutions ",
  LocationId: 6,
  salary: "From $60,000 a year to $155,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you ",
  long_description: "BASIC QUALIFICATIONS, · Excellent problem solving skills.Possess a sound understanding of computer science algorithms, data structures, object oriented design and databases.Able to work in a diverse teamExperience being the tech lead for software development teams.Understanding of system architecture and experience with large distributed systems.Experience in forecasting, machine learning, or operations research.Be a fast learner and have the ability to adapt quickly to a fast-paced development environment.", createdAt: new Date(),
  updatedAt: new Date()
},
{
  title: "Backend Developer ",
  company: "Amazon",
  LocationId: 6,
  salary: "From $70,000 a year to $125,000",
  summary: "Have you ever ordered a product on Amazon and when that box with the smile arrives you wonder how it got to you so fast? Wondered where it came from and how much it would have cost Amazon? If so, the Amazon Global Supply Chain Optimization team (SCOT) is for you. ",
  long_description: "BASIC QUALIFICATIONS,· Bachelor’s degree in Computer Science, Computer Engineering or related technical discipline.· 1+ years industry experience as a Software Engineer or Software Developer (SDE)· Strong Computer Science and development fundamentals, including object-oriented design, data structures, algorithm design, and complexity analysis.· Demonstrated proficiency in, at least, one modern programming language such as Java, Python, C++, C.· Knowledge of professional software engineering and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. ",
  createdAt: new Date(),
  updatedAt: new Date()
}
      
  ], {});

    await queryInterface.bulkInsert('Favorites', [
      {
        JobId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        JobId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        JobId: 3,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  
  
  ], {});
  },

  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
