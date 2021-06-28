'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        let materias = [
            {
                nombre: 'Intro a la programacion',
                id_carrera: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Objetos 1 ',
                id_carrera: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Estrategia de Persistencia',
                id_carrera: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Matematica 3',
                id_carrera: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]
        await queryInterface.bulkInsert('materia', materias, {});
    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('materia', null, {});
    }
};
