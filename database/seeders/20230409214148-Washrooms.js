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
        location: '2nd floor, boys, near exit 11',
        rating: 100,
        observations: [true, true, true, true],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: '2nd floor, girls, science hall',
        rating: 75,
        observations: [true, true, true, false],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: '3rd floor, boys',
        rating: 100,
        observations: [true, true, true, true],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: '3rd floor, girls',
        rating: 100,
        observations: [true, true, true, true],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: '1st floor, gender neutral',
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
