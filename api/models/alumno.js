'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER,
    id_materia: DataTypes.INTEGER
  }, {});
  alumno.associate = function(models) {
    // associations can be defined here
  };
  return alumno;
};