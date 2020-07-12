'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
    Banner.belongsTo(models.User)
  };
  return Banner;
};