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
            fieldName: 'product_id'
        },
        frequencyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'frequency_id'
        },
    },
    {
        tableName: 'frequency_list',
    },
)

module.exports = FrequencyList