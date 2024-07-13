const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Login extends Model {}

Login.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newLoginData) => {
                newLoginData.password = await bcrypt.hash(newLoginData.password, 10);
                return newLoginData;
            },
            beforeUpdate: async (updatedLoginData) =>{
                updatedLoginData.password = await bcrypt.hash(updatedLoginData.password, 10);
                return updatedLoginData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'login',
    }
);