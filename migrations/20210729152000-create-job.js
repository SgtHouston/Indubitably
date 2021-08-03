'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      LocationId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Locations",
          key:"id"
        }
      },
      salary: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.TEXT
      },
      long_description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jobs');
  }
};