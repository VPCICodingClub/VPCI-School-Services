'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.TEXT
      },
      link: {
        type: Sequelize.TEXT
      },
      start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ClubId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Clubs',
          key: 'id'
        }
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
    await queryInterface.dropTable('Events');
  }
};