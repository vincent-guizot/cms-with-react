'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   await queryInterface.bulkInsert('Carts', [
     {
      ProductId: 1,
      CustomerId: 1,
      quantity: 3,
    },
    {
      ProductId: 2,
      CustomerId: 1,
      quantity: 2,
    },
    {
      ProductId: 3,
      CustomerId: 1,
      quantity: 5,
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};
