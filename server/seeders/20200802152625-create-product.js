'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   await queryInterface.bulkInsert('Products', [
     {
      name: 'RAM Corsair 16Gb',
      category: 'Laptop',
      price: 1000000,
      stock: 3,
      image: 'https://winsoft.lk/pub/media/catalog/product/cache/5eb4c0f1fce734657230e12b5c40c223/0/2/02_92_1.jpg',
      UserId: 1
    },
    {
      name: 'RAM Corsair 16Gb',
      category: 'Laptop',
      price: 1000000,
      stock: 3,
      image: 'https://winsoft.lk/pub/media/catalog/product/cache/5eb4c0f1fce734657230e12b5c40c223/0/2/02_92_1.jpg',
      UserId: 1
    },
    {
      name: 'RAM Corsair 16Gb',
      category: 'Laptop',
      price: 1000000,
      stock: 3,
      image: 'https://winsoft.lk/pub/media/catalog/product/cache/5eb4c0f1fce734657230e12b5c40c223/0/2/02_92_1.jpg',
      UserId: 1
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
