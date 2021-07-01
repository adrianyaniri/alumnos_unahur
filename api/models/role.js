'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role =  sequelize.define('Role', {
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Role.associate = models => {
    Role.belongsToMany(models.usuario,
        {as:"usuarios",through:'usuarios_roles', foreignKey: 'role_id' })
  }

  return Role


};