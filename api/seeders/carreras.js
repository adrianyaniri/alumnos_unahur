'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        let carreras = [
            {
                nombre: 'Ingenieria en Electronica',
                createdAt:"2021-06-20 21:47:57",
                updatedAt:"2021-06-20 21:47:57",
            },
            {
                nombre: 'Licenciatura en Informatica ',
                createdAt:"2021-06-20 21:47:57",
                updatedAt:"2021-06-20 21:47:57",
            },
            {
                nombre: 'Licenciatura en Biotecnologia',
                createdAt:"2021-06-20 21:47:57",
                updatedAt:"2021-06-20 21:47:57",
            },
            {
                nombre: 'Licenciatura en Matematicas',
                createdAt:"2021-06-20 21:47:57",
                updatedAt:"2021-06-20 21:47:57",
            },
            {
                nombre: 'Profesorado Educacion Fisica',
                createdAt:"2021-06-20 21:47:57",
                updatedAt:"2021-06-20 21:47:57",
            }



        ]
        await queryInterface.bulkInsert('carreras', carreras, {});

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('carreras', null, {});

    }
};
