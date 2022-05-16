const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const ProductPrice = sequelize.define('ProductPrice', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        productAttributesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_attributes_id'
        },
    },
    {
        tableName: 'product_price',
    },
)

module.exports = ProductPrice