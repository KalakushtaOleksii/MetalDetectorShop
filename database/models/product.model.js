const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'product_name',
            validate: {
                len: [3, 100],
            },
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                isUrl: true,
            },
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'category_id',
        },
        trademarkId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'trademark_id',
        },
    },
    {
        tableName: 'products',
    },
)

module.exports = Product