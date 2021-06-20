'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let materias = [
      {
        nombre:"Robotica",
        id_carrera: 2,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Objetos 2",
        id_carrera: 2,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Persistencia",
        id_carrera: 2,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Interface",
        id_carrera: 2,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Intro Programacion",
        id_carrera: 2,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Base de datos",
        id_carrera: 2,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },  {
        nombre:"Matematicas",
        id_carrera: 3,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },


    ]
    await queryInterface.bulkInsert('materia', materias, {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('materia', null, {});

  }
};
