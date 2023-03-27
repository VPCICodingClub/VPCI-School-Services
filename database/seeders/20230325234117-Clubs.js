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
    await queryInterface.bulkInsert('Clubs', [
      {
        name: 'Club 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non efficitur quam. Pellentesque nec dolor in risus dapibus elementum.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Club 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ex quis sapien fringilla pulvinar sed eu orci. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Club 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere hendrerit sollicitudin. Donec vitae lacus scelerisque, rutrum urna ut, consequat ante.',
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
    await queryInterface.bulkDelete('Clubs', null, {});
  }
};