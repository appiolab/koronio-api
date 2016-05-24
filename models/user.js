'use strict';
var statusCode = require('./../lib/status_code/UserStatusCode')();

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
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: {
                    args: [[0, 1]],
                    msg: "Must be 'active' or 'inactive' only."
                }
            },
            get : function()  {
                return statusCode.getStatus(this.getDataValue('status'));
            },
            set : function(val) {
                this.setDataValue('status', statusCode.setStatus(val));
            }

        },
        userType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_type',
            validate: {
                isIn: {
                    args: [[0, 1, 2, 3]],
                    msg: "Must be 'admin', 'moderator' or 'user' only"
                }
            },
            get : function()  {
                return statusCode.getUserType(this.getDataValue('userType'));
            },
            set : function(val) {
                this.setDataValue('userType', statusCode.setUserType(val));
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
                User.hasMany(models.Subscription, {
                    foreignKey  : 'user_id',
                    constraints : true
                });
                User.hasMany(models.Team, {
                    foreignKey  : 'admin_id',
                    constraints : true
                });
                User.hasMany(models.TeamMember, {
                    foreignKey  : 'member_id',
                    constraints : true
                });
            }
        },
        instanceMethods: {

        },
        freezeTableName: true,
        tableName: 'users'
    });
    return User;
};