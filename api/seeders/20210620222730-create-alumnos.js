'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let alumnos = [
      {
        nombre: 'Claudio',
        email: 'claudio@gmail.com',
        id_carrera: 1,
        id_materia: 2,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre: 'Maria',
        email: 'maria@gmail.com',
        id_carrera: 3,
        id_materia: 3,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre: 'Angel',
        email: 'angel@gmail.com',
        id_carrera: 2,
        id_materia: 4,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
    ]
     await queryInterface.bulkInsert('alumnos', alumnos, {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('alumnos', null, {});

  }
};
