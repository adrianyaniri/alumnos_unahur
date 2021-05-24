'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER,
    id_materia: DataTypes.INTEGER
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