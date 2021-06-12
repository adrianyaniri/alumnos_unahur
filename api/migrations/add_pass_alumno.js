'use strict';

module.exports = {
    up: ( queryInterface, Sequelize) =>{
        return queryInterface.addColumn(
            'alumnos',
            'password',
            {
                type: Sequelize.STRING,
            }
        )
    },
    down:( queryInterface, Sequelize )=>{
        return queryInterface.removeColumn(
            'alumnos',
            'password'
        )
    }
};