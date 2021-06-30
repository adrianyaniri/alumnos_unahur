'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return Promise.all([
        queryInterface.bulkInsert('Roles',[
          { role: 'admin', createdAt: new Date(), updatedAt: new Date() },
          { role: 'user', createdAt: new Date(), updatedAt: new Date() }
        ],{}),
      queryInterface.bulkInsert('usuarios_roles',[
        { usuario_id: 1, role_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { usuario_id: 1, role_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { usuario_id: 2, role_id: 2, createdAt: new Date(), updatedAt: new Date() },

      ],{}),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.bulkDelete('Roles',null,{}),
        queryInterface.bulkDelete('usuarios_roles',null,{}),

    ])
  }
};
