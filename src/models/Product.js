const { DataTypes } = require('sequelize')
      sequelize = require('../../database/db');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },

    productName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    brand: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: false,    
});

module.exports = Product;
