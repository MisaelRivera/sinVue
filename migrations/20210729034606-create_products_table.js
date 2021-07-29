'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      productName: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },

      price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },

      brand: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false,
      },

      stock: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },

      imgUrl: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('products');
  }
};
