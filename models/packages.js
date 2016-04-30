'use strict';
var moment  = require('moment');

module.exports = function(sequelize, DataTypes) {
    var Package = sequelize.define('Package', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        rate: {
            type: DataTypes.DOUBLE(10, 2),
            allowNull: false,
        },
        durationType: {
            type: DataTypes.STRING(8),
            allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            allowNull: false,
            type: DataTypes.INTEGER,
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
            associate: function(models) {
                Package.hasMany(models.Subscription, {
                    foreignKey  : 'package_id',
                    constraints : true
                });
            }
        },
        instanceMethods: {
            getSubscriptionExpireDate: function (packageQty) {

                var duration = this.duration * packageQty;

                if(this.durationType === 'yearly'){
                    // return moment().add(duration, 'y').format('YYYY-MM-DD');
                    return '2035-12-31';
                } else if(this.durationType === 'monthly'){
                    return moment().add(duration, 'M').format('YYYY-MM-DD');
                } else{
                    return '2035-12-31';
                }
            },
            getDeactivationDate: function (packageQty) {

                if(this.durationType === 'yearly'){
                    // var duration = this.duration * packageQty;
                    // return moment().add(duration, 'y').format('YYYY-MM-DD');
                    return '2035-12-31';
                } else if(this.durationType === 'monthly'){
                    var duration = this.duration * packageQty;
                    return moment().add(duration +3, 'M').format('YYYY-MM-DD');
                } else{
                    return '2035-12-31';
                }
            }
        },
        freezeTableName: true,
        tableName: 'packages'
    });
    return Package;
};