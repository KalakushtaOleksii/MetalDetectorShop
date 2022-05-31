const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const CartItem = sequelize.define('CartItem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'cart_id',
        },
        productAttributesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_attributes_id',
        },
        storageId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'storage_id',
        }
    },
    {
        tableName: 'cart_item',
    },
)

module.exports = CartItem