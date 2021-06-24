'use strict';
module.exports = (sequelize, DataTypes) => {
  const catedra = sequelize.define('catedra', {
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            is:"[a-z] ",
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
  catedra.associate = function(models) {

    catedra.belongsTo(models.materia,
        {
          as: 'Materia_Relacionada',
          foreignKey: 'id_materia'
        })
  };
  return catedra;
};