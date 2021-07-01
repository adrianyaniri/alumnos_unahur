module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'usuarios',
            'roles', {
                type:Sequelize.STRING
            });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'usuarios',
            'roles'
        );
    }
};