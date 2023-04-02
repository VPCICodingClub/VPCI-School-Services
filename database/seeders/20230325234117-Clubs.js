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
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Stoned_Fox.jpg',
        slug: 'club-1',
        supervisors: ['Mr. Lorem', 'Mr. Ipsum'],
        leaders: ['Lorem, Ipsum'],
        schedule: '12:00PM Mondays',
        social: ['vpcidiscord', 'vpciig'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Club 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ex quis sapien fringilla pulvinar sed eu orci. ',
        logo: 'https://popcat.click/twitter-card.jpg',
        slug: 'club-2',
        supervisors: ['Mr. Lorem', 'Mr. Ipsum'],
        leaders: ['Lorem, Ipsum'],
        schedule: '12:00PM Mondays',
        social: ['vpcidiscord', 'vpciig'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Club 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere hendrerit sollicitudin. Donec vitae lacus scelerisque, rutrum urna ut, consequat ante.',
        logo: 'https://i.pinimg.com/236x/c4/dc/02/c4dc027b8f8df79fbed1446b1f7bf103.jpg',
        slug: 'club-3',
        supervisors: ['Mr. Lorem', 'Mr. Ipsum'],
        leaders: ['Lorem, Ipsum'],
        schedule: '12:00PM Mondays',
        social: ['vpcidiscord', 'vpciig'],
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
