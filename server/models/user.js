'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Username must be filled! :)"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Email must be filled! :)"
        },
        isEmail : {
          message : "Must Email format!"
        },
      },
      unique : true
    },
    password: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Username must be filled! :)"
        }
      }
    },  
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    
  })
  return User;
};