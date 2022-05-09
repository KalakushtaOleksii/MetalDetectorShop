const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const Storage = sequelize.define('Storage', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        storageName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            fieldName: 'storage_name',
            validate: {
                len: [3, 100],
            },
        },
        location: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [3, 50],
            },
        },
    },
    {
        tableName: 'storage',
    },
)

module.exports = Storage

