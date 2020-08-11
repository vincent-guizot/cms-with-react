'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Cart)
      Transaction.belongsTo(models.Customer)
      Transaction.hasOne(models.Shipper)
      Transaction.belongsTo(models.Invoice)
    }
  };
  Transaction.init({
    CartId: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty : {
          message : "CartId must be filled! :)"
        }
      }
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty : {
          message : "CustomerId must be filled! :)"
        },
      }
    },
    subtotal: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty : {
          message : "Price must be filled! :)"
        },
      }
    },
    ShipperId: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty : {
          message : "ShipperId must be filled! :)"
        },
      }
    },
    status : {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Status is required!"
        }
      }
    },
    InvoiceId : {
      type : DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  Transaction.beforeCreate((user) => {
    
  })
  return Transaction;
};