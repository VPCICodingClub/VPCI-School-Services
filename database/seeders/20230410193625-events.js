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
  
  await queryInterface.bulkInsert('Events', [
      {
        title: 'Cooking',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non efficitur quam. Pellentesque nec dolor in risus dapibus elementum.',
        location: 'C3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
},
  async down (queryInterface, Sequelize) {
  
     // await queryInterface.bulkDelete('Events', null, {});
  }
};
