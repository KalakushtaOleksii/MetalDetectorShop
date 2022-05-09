const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const OrderDetail = sequelize.define('OrderDetail', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'product_id',
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'order_id',
        },
    },
    {
        tableName: 'order_details',
    },
)

module.exports = OrderDetail