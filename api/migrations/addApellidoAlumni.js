module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'alumnos',
            'apellido', {
            type:Sequelize.STRING
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'alumnos',
            'apellido'
        );
    }
};