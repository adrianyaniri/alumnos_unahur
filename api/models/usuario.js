'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    name:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlpha:true
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:true
      }
    }
  }, {
  });
  usuario.associate = function(models) {
    // associations can be defined here
  };
  return usuario;
};