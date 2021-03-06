'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        let carreras = [
            {
                nombre: 'Ingenieria en Electronica',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Tecnicatura Universitaria en Diseño Industrial',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Licenciatura en Biotecnologia',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Licenciatura en Matematicas',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Profesorado Educacion Fisica',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ]
        await queryInterface.bulkInsert('carreras', carreras, {});
    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('carreras', null, {});
    }
};
