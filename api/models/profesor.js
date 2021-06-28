'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isAlpha:true,
            len:[4,250]
        }
    } ,
    id_materia:{
        type:DataTypes.INTEGER,
        defaultValue: 0,
        validate:{
            isInt: true,
            min:0
        }
    },
  }, {});
  profesor.associate = function(models) {

    profesor.belongsTo(models.materia,
        {
          as: 'Materia_Relacionada',
          foreignKey: 'id_materia'
        })
  };
  return profesor;
};