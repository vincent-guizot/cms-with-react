'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 2

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg : "Name must be filled!"
        }
      }
    },
    role : {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg : "Role must be filled!"
      }
    }
  },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg : "Email must be filled!"
        },
        isEmail: {
          msg : "Must be email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg : "Pwd must be filled!"
        }
      }
    }
  }, {
    hooks : {
      beforeCreate(user){
        user.password = bcrypt.hashSync(user.password, saltRounds)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Product)
    User.hasMany(models.Banner)

  };
  return User;
};