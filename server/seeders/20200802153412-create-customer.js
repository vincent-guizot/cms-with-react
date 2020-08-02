'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   await queryInterface.bulkInsert('Customers', [{
      username: 'Jennie',
      email: 'jennie@mail.com',
      password: '123',
      avatar: 'https://cdn.idntimes.com/content-images/community/2020/06/1s-6p62o-343d62a4111898cd0cb48900b3acea99.jpg' 
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
