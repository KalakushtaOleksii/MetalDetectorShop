const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const FrequencyList = sequelize.define('FrequencyList', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_id'
        },
        frequencyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'frequency_id'
        },
    },
    {
        tableName: 'frequency_list',
    },
)

module.exports = FrequencyList