'use strict';

const accountTypes = require('../../config/accountTypes.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT
      },
      passwordHash: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      salt: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      //email: {
      //  allowNull: false,
      //  type: Sequelize.TEXT
      //},
      type: {
        allowNull: false,
        type: Sequelize.ENUM(accountTypes),
        default: 'member',
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
    await queryInterface.dropTable('Accounts');
  }
};
