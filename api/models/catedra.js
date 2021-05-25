'use strict';
module.exports = (sequelize, DataTypes) => {
  const catedra = sequelize.define('catedra', {
    nombre: DataTypes.STRING,
    id_materia: DataTypes.INTEGER
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