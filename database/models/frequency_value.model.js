const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const FrequencyValue = sequelize.define('FrequencyValue', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productAttributesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_attributes_id'
        },
        frequencyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'frequency_id'
        },
    },
    {
        tableName: 'frequency_value',
    },
)

module.exports = FrequencyValue