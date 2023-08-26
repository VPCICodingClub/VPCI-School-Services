'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Washrooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.FLOAT
      },
      observations: {
        type: Sequelize.ARRAY(Sequelize.BOOLEAN)
      },
      entryDates: {
        type: Sequelize.ARRAY(Sequelize.DATE)
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
    await queryInterface.dropTable('Washrooms');
  }
};