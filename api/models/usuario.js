'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    name:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlpha:{
          msg:'el nombre solo contiene letras'
        },
        len:{
          args:[2, 255],
          msg:'el nombre tiene que tener minimo 2 letras'
        }
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len: [4,255]
      }
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