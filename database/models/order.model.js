const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
        },
    },
    {
        tableName: 'orders',
    },
)

module.exports = Order