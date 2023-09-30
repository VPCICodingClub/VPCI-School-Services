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
      logoLink: {
        type: Sequelize.TEXT
      },
      slug: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      supervisors: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      executives: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      meetDays: {
        type: Sequelize.ARRAY(Sequelize.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'))
      },
      meetTime: {
        type: Sequelize.TIME
      },
      // schedule: {
      //   type: Sequelize.TEXT
      // },
      socialMedias: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      joinLink: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clubs');
  }
};