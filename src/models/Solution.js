const { DataTypes } = require('sequelize'),
      sequelize = require('../../database/db');

const Solution = sequelize.define('Solution', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    preparation_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    chemical_abreviation: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },

    grams: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Solution;