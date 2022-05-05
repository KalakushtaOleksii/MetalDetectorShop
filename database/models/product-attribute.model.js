const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const ProductAttribute = sequelize.define('ProductAttribute', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        trademarkId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'trademark_id',
        },
        countryIid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'country_id',
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'product_id',
        },
        frequencyListId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fieldName: 'frequency_list_id'
        }
    },
    {
        tableName: 'product_attributes',
    },
)

module.exports = ProductAttribute