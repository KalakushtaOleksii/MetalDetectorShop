const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const Frequency = sequelize.define('Frequency', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        value_frequency: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'value_frequency',
            validate: {
                len: [1, 50],
            },
        },
    },
    {
        tableName: 'frequency',
    },
)

module.exports = Frequency