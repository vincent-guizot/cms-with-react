'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User)
      Product.belongsToMany(models.Customer, {through: models.Cart})
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Username must be filled! :)"
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Category must be filled! :)"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Price must be filled! :)"
        },
        isInt : {
          message : "Price must be Number!"
        },
        min : {
          args : 1,
          message : "Price must more than 1"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Stock must be filled! :)"
        },
        isInt : {
          message : "Stock must be Number!"
        },
        min : {
          args : 1,
          message : "Stock must more than 1"
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Image must be filled! :)"
        }
      }
    },
    UserId : {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  Product.beforeCreate((user) => {

  })
  return Product;
};