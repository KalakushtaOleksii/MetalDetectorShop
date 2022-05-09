const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const StorageProductList = sequelize.define('StorageProductList', {
        productAttributesId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            fieldName: 'product_attributes_id',
        },
        storageId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            fieldName: 'storage_id',
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'storage_product_list',
    },
)

module.exports = StorageProductList