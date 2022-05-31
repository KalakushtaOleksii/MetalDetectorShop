const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const Cart = sequelize.define('Cart', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        closed: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
        },
    },
    {
        tableName: 'cart',
    },
)

module.exports = Cart