'use strict';
var statusCode = require('./../lib/status_code/TeamStatusCode')();

module.exports = function(sequelize, DataTypes) {
    var TeamMember = sequelize.define('TeamMember', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        teamId: {
            allowNull: false,
            type: DataTypes.BIGINT,
            field:'team_id',
            validate: {
                isInt: {
                    msg: "Must provide integer only."
                }
            }
        },
        roleId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'role_id',
            defaultValue: 2,
            validate: {
                isIn: {
                    args: [[0, 1, 2, 3]],
                    msg: "Must be 'admin', 'member' or 'guest'."
                }
            },
            get : function()  {
                return statusCode.getStatus(this.getDataValue('status'));
            },
            set : function(val) {
                this.setDataValue('status', statusCode.setStatus(val));
            }
        },
        designation: {
            allowNull: true,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [[0, 255]],
                    msg: "Must be between 0 to 255 character."
                }
            }
        },
        status: {
            type: DataTypes.INTEGER,
            validate: {
                isIn: {
                    args: [[0, 1]],
                    msg: "Status must be 'active' or 'inactive'."
                }
            },
            get : function()  {
                return statusCode.getStatus(this.getDataValue('status'));
            },
            set : function(val) {
                this.setDataValue('status', statusCode.setStatus(val));
            },
            allowNull: false
        },
        activationCode: {
            type: DataTypes.STRING,
            field: 'activation_code',
            allowNull: true
        },
        activationDate: {
            type: DataTypes.DATE,
            field: 'activation_date',
            allowNull: true
        },
        canCreateProject: {
            type: DataTypes.BOOLEAN,
            field: 'create_project',
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
            associate: function(models) {
                TeamMember.belongsTo(models.User, {
                    foreignKey: 'member_id',
                    targetKey: 'id',
                    constraints : true
                });
                TeamMember.belongsTo(models.Team, {
                    as            : 'Team',
                    foreignKey    : 'team_id',
                    targetKey     : 'id',
                    constraints   : true
                });
            }
        },
        instanceMethods: {
        },
        freezeTableName: true,
        tableName: 'team_members'
    });
    return TeamMember;
};