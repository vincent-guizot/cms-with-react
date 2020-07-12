'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {
          msg : 'Title must be filled!'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {
          msg : 'Title must be filled!'
        }
      }
    },
    due: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here

  };
  return Task;
};