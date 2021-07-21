const { DataTypes } = require('sequelize'),
      sequelize = require('../../database/db');

const User = sequelize.define('User', {
        
        id: {
            type: DataTypes.UUID,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },

        password: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
}, {
    timestamps: false,
});

 module.exports = User;