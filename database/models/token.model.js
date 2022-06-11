const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const Token = sequelize.define('Token', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
        },
    },
    {
        tableName: 'token',
    },
)

module.exports = Token