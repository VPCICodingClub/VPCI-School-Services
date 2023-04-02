'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      logo: {
        type: Sequelize.TEXT
      },
      slug: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      supervisors: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      leaders: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      schedule: {
        type: Sequelize.TEXT
      },
      social: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clubs');
  }
};