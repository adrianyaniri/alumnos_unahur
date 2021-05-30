'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isAlpha:true,
            len:[2,250]
        }
    },
    id_carrera:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate:{
            isInt:true,
            min:0
        }
    },
  }, {});
  materia.associate = function(models) {

    materia.belongsTo(models.carrera
        ,{
          as : 'Carrera-Relacionada',
          foreignKey: 'id_carrera'
        })
  };
  return materia;
};
