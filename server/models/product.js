'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type:DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Name must be filled!"
        }
      }
    },
    image_url: {
      type:DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "URl must be filled!"
        }
      }
    },
    price: {
      type:DataTypes.INTEGER,
      validate : {
        notEmpty : {
          message : "Price must be filled!"
        },
        min: 0,
      }
    },
    stock: {
      type:DataTypes.INTEGER,
      validate : {
        notEmpty : {
          message : "Stock must be filled!"
        },
        min: 0,
      }
    },
    category: DataTypes.STRING,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.User)
    Product.hasMany(models.Transaction)
  };
  return Product;
};