'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    let catedras = [
      {
        nombre:"Lopez",
        id_materia: 5,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Caruso",
        id_materia: 6,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      },
      {
        nombre:"Sanches",
        id_materia: 2,
        createdAt:"2021-06-20 21:47:57",
        updatedAt:"2021-06-20 21:47:57",
      }


    ]
    await queryInterface.bulkInsert('catedras', catedras, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete( 'catedras', null, {});
  }
};
