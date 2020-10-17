'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   await queryInterface.bulkInsert('Products', [
     {
      name: 'RAM Corsair 16Gb ',
      category: 'Hardware',
      price: 1000000,
      stock: 5,
      image: 'https://winsoft.lk/pub/media/catalog/product/cache/5eb4c0f1fce734657230e12b5c40c223/0/2/02_92_1.jpg',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'RAM Corsair 16Gb',
      category: 'Hardware',
      price: 800000,
      stock: 1,
      image: 'https://winsoft.lk/pub/media/catalog/product/cache/5eb4c0f1fce734657230e12b5c40c223/0/2/02_92_1.jpg',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },  
    {
      name: 'RAM Corsair 16Gb',
      category: 'Hardware',
      price: 1000000,
      stock: 3,
      image: 'https://winsoft.lk/pub/media/catalog/product/cache/5eb4c0f1fce734657230e12b5c40c223/0/2/02_92_1.jpg',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
