'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let materias = [
      {
        nombre:"Robotica",
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Objetos 2",
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Persistencia",
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Interface",
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Intro Programacion",
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Base de datos",
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
