'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('carrera', {
    nombre:{
      type: DataTypes.STRING,
      validate:{
        is:"[a-z] ",
        len: [2,250]
      }
    }
  }, {});
};