const  { DataTypes } = require('sequelize')
const  { sequelize } = require('../index')

const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'first_name',
            validate: {
                len: [3, 50],
            },
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'last_name',
            validate: {
                len: [3, 50],
            },
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'date of birth'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
    },
    {
        tableName: 'users',
    },
)

module.exports = User