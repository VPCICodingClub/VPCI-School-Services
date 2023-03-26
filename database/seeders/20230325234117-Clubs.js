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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non efficitur quam. Pellentesque nec dolor in risus dapibus elementum. Aliquam leo nunc, lacinia eget maximus a, viverra quis urna. Nullam vestibulum lorem urna, vel viverra diam vestibulum in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam maximus vel turpis sit amet rutrum. Integer et eros dui. Donec iaculis sed sapien a tempus.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Club 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ex quis sapien fringilla pulvinar sed eu orci. Etiam consequat sollicitudin dui, sit amet porta lacus ornare nec. Aliquam et metus pharetra ante malesuada venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quis leo eu magna porta volutpat fermentum sed massa. Phasellus et bibendum nulla, sit amet condimentum massa. Mauris odio justo, placerat eu lacinia a, mattis eget augue. Ut faucibus massa at luctus semper. Donec at tellus auctor, suscipit lacus sed, vehicula nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Club 3',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere hendrerit sollicitudin. Donec vitae lacus scelerisque, rutrum urna ut, consequat ante. Nullam sodales at diam et pretium. Sed eget maximus leo. Maecenas mattis neque id nulla hendrerit vulputate. Phasellus ut leo ut eros tempus consequat. Duis eget arcu ante. Maecenas euismod dui at vulputate ultricies. Ut feugiat mattis augue, at molestie lectus fermentum non. Nullam et ipsum ac nisi consequat euismod et et sem. Sed non metus ultricies felis ultrices ultrices. Morbi ac interdum lectus. Vestibulum lacinia vestibulum pulvinar.',
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
