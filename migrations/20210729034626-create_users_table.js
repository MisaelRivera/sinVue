'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      firstName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },

      lastName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },

      username: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },

      password: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },

      role: {
        type: Sequelize.DataTypes.STRING(10),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users'); 
  }
};
