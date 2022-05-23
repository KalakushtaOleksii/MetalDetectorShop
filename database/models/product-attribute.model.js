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
            field: 'trademark_id',
        },
        countryIid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'country_id',
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_id',
        },
        // frequencyListId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     field: 'frequency_list_id'
        // }
    },
    {
        tableName: 'product_attributes',
    },
)

module.exports = ProductAttribute