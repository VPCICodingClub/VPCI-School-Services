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
        observations: [true, true, true, true],
        entryDates: `{${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: '2nd floor, girls, science hall',
        observations: [true, true, true, false],
        entryDates: `{${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: '3rd floor, boys',
        observations: [true, true, true, true],
        entryDates: `{${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: '3rd floor, girls',
        observations: [true, true, true, true],
        entryDates: `{${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: '1st floor, gender neutral',
        observations: [true, true, true, true],
        entryDates: `{${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}, ${new Date().toISOString()}}`,
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
