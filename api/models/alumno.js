'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            is:"[a-z] ",
            len:[3,250]
        }
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true
        }
    },
    password:{
        type:DataTypes.STRING,
        validate:{
            isAlphanumeric: true
        }

    },
    id_carrera: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isInt:true,
            min: 0
        }
    },
    id_materia:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isInt:true,
            min:0
        }
    },
  }, {});
  alumno.associate = function(models) {

    alumno.belongsTo(models.carrera,
        {
          as:'Carrera_Relacionada',
          foreignKey: 'id_carrera'
        });
    alumno.belongsTo(models.materia,
        {
          as:'Materia_Relacionada',
          foreignKey:'id_materia'
        })
  };
  return alumno;
};