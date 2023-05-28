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
    await queryInterface.bulkInsert('Washrooms', [
      {
        rating: 100,
        observations: [true, true, true, true],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 75,
        observations: [true, true, true, false],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 100,
        observations: [true, true, true, true],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 100,
        observations: [true, true, true, true],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 100,
        observations: [true, true, true, true],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Washrooms', null, {});
  }
};
