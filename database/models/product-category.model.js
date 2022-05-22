const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const ProductCategory = sequelize.define('ProductCategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        desc: {
            type: DataTypes.STRING(150),
            allowNull: true,
            validate: {
                len: [3, 150],
            }
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [3, 50],
            },
        },
    },
    {
        tableName: 'product_category',
    },
)


module.exports = ProductCategory