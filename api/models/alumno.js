'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isAlpha: true,
            len:[2,250],
        }
    },
     apellido:{
        type: DataTypes.STRING,
         allowNull: false,
         validate:{
            isAlpha:true,
             len:[4,250]
         }
     },
    email: {
        type:DataTypes.STRING,
        allowNull: true,
        validate:{
            isEmail: true
        }
    },

    id_carrera: {
        type: DataTypes.INTEGER,
        allowNull:true,
        validate:{
            isInt:true,
            min: 0
        }
    },
    id_materia:{
        type: DataTypes.INTEGER,
        allowNull:true,
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