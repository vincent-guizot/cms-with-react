'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkout = sequelize.define('Checkout', {
    ShoperId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    ProductId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    codeTransaction:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    } ,
    productName:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    delivery: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    status: DataTypes.STRING
  }, {});
  Checkout.associate = function(models) {
    // associations can be defined here
  };
  return Checkout;
};