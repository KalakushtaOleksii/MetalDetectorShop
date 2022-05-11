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
        cardId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'card_id',
        },
        productAttributesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'product_attributes_id',
        },
    },
    {
        tableName: 'cart_item',
    },
)

module.exports = CartItem