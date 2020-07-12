'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 2

module.exports = (sequelize, DataTypes) => {
  const Shoper = sequelize.define('Shoper', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    }
  }, {});

  Shoper.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, saltRounds)
  })

  Shoper.associate = function (models) {
    // associations can be defined here
    Shoper.hasMany(models.Transaction)
  };
  return Shoper;
};