'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('carrera', {
    nombre:{
      type: DataTypes.STRING,
      validate:{
        isAlpha:true,
        len: [2,250]
      }
    }
  }, {});
};