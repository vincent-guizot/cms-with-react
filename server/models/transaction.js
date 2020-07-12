'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    ShoperId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
        isInt: true
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
        isInt: true
      }
    },
    delivery: {
      type: DataTypes.STRING,
    },
    items: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 1
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 0
      }
    }
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.Shoper)
    Transaction.belongsTo(models.Product)
  };
  return Transaction;
};