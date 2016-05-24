'use strict';
var statusCode = require('./../lib/status_code/SubscriptionStatusCode')();

module.exports = function(sequelize, DataTypes) {
    var Subscription = sequelize.define('Subscription', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        packageId: {
            allowNull: false,
            type: DataTypes.BIGINT,
            field: 'package_id',
            validate: {
                isInt: {
                    msg: "Must provide integer only."
                }
            }
        },
        userId: {
            allowNull: false,
            type: DataTypes.BIGINT,
            field: 'user_id',
            validate: {
                isInt: {
                    msg: "Must provide integer only."
                }
            }
        },
        packageQuantity: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: {
                    msg: "Must provide integer only."
                }
            },
            allowNull: false
        },
        rate: {
            type: DataTypes.DOUBLE(10, 2),
            validate: {
                isInt: {
                    msg: "Must provide double only."
                }
            },
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE(10, 2),
            validate: {
                isInt: {
                    msg: "Must provide double only."
                }
            },
            allowNull: false
        },
        durationType: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            allowNull: false,
            type: DataTypes.INTEGER,
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
        activationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        expireDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        deactivationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        allowedTeam: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        allowedProjects: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        allowedMember: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        allowedStorage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        }
    }, {
        classMethods: {
            deactivateEarlierSubscriptionByUser: function (userId, except) {
                Subscription.update({
                    status: 0
                    }, {
                    where: {
                        user_id: userId,
                        id      : {
                            $ne : except
                        }
                    }
                    })
                    .then(function (result) {
                        return result;
                    })
                    .catch(function (err) {
                        return err;
                    });

            },
            associate: function(models) {
                Subscription.belongsTo(models.User, {
                    foreignKey  : 'user_id',
                    targetKey   : 'id',
                    constraints : true
                });

                Subscription.belongsTo(models.Package, {
                    foreignKey  : 'package_id',
                    targetKey   : 'id',
                    constraints : true
                });
            }
        },
        instanceMethods: {


        },
        freezeTableName: true,
        tableName: 'subscriptions'
    });
    return Subscription;
};