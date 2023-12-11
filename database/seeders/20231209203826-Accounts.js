'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Accounts',[
      {
        username: 'admin',
        passwordHash: '2e0ef3b12b27036479885553333b310bb4bd80570245382193a05a769fdf47e1474f74ae03daf2b4da61ba807fd421611df64a175964883cc0eb5ddb48665d39',
        salt: '3bd563331dba8af1c42baad2bb692bee',
        type: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
