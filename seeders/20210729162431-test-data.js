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
        firstName: "chris",
        lastName: "houston",
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
      }



  ], {});

    await queryInterface.bulkInsert('Jobs', [
      {
        title: "Full-Stack Developer",
        company: "TechSolutions",
        LocationId: 1,
        salary: "From $68,000 a year",
        summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
        long_description: "Job Description, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Software Developer",
        company: "FadeBook",
        LocationId: 2,
        salary: "From $50,000 a year",
        summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
        long_description: "Job Description, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Frontend Developer",
        company: "Wall Street Tech",
        LocationId: 3,
        salary: "From $90,000 a year",
        summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
        long_description: "Job Description, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Full-Stack Engineer",
        company: "Snoogle",
        LocationId: 4,
        salary: "From $90,000 a year",
        summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
        long_description: "Job Description, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Backend Developer",
        company: "TechSolutionsPlus",
        LocationId: 5,
        salary: "From $80,000 a year",
        summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
        long_description: "Job Description, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "React Developer",
        company: "TechSolutionsPlus",
        LocationId: 1,
        salary: "From $70,000 a year",
        summary: "The ideal candidate will have an interest in developing both strong backend development experience and good front end engineering skills with an interest in growing into a Full Stack Developer. ",
        long_description: "Job Description, Full or Part time, Office or remote, job requirements or technology, qualifications, Equal Opportunity",
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
