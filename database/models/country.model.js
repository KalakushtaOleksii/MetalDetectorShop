const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const Country = sequelize.define('Country', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 50],
            },
        },
    },
    {
        tableName: 'country',
    },
)

module.exports = Country