'use strict';
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(50),
            validate: {
                isEmail: {
                    msg: "Must be a valid email format."
                }
            }
        },
        userid: {
            allowNull: false,
            type: DataTypes.STRING(25),
            unique: true,
            validate: {
                isAlphanumeric: {
                    msg: "Must provide alphanumeric characters only."
                }
            }
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        isActive: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: {
                    args: [[0, 1]],
                    msg: "Must be 0 or 1 only."
                }
            }
        },
        userType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: {
                    args: [[1, 2, 3]],
                    msg: "Must be 1, 2 or 3 only"
                }
            }

        },
        lastLogin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        classMethods: {
            create: function () {
                console.log('create user');
            },
            associate: function (models) {
                // associations can be defined here
            }
        },
        instanceMethods: {
            createIm: function () {
                console.log('create instance method');
            }
        }
    });
    return User;
};