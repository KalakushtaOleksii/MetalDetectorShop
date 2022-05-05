const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const Trademark = sequelize.define('Trademark', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [3, 100],
            },
        },
    },
    {
        tableName: 'trademarks',
    },
)

module.exports = Trademark