'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Role', {
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
};