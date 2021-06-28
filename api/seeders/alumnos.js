'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        let alumnos = [
            {
                nombre: 'Adrian',
                apellido:'Yaniri',
                email:"adrian@gmail.com",
                id_carrera: 1,
                id_materia: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Carlos',
                apellido: 'Rodrigues',
                email:"rodrigues@gmail.com",
                id_carrera: 1,
                id_materia: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Ana',
                apellido: 'Lopez',
                email:"lopez@gmail.com",
                id_carrera: 1,
                id_materia: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                nombre: 'Luana',
                apellido: 'Ramirez',
                email:"ramires@gmail.com",
                id_carrera: 3,
                id_materia: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

        ]
        await queryInterface.bulkInsert('alumnos', alumnos, {});
    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('alumnos', null, {});
    }
};
