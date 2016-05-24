'use strict';
//@TODO TeamModel: teamid unique validation is pending.
var statusCode = require('./../lib/status_code/TeamStatusCode')();

module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define('Team', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        teamid: {
            type: DataTypes.STRING(50),
            validate: {
                len: {
                    args: [3, 20],
                    msg: "Must be between 3 to 20 character."
                },
                isAlphanumeric: {
                    msg: "Must provide alphanumeric characters only."
                }
            },
            field:'slug',
            allowNull: false
        },
        adminId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field:'admin_id'
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        details: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        email:{
            type: DataTypes.STRING(50),
            validate: {
                isEmail: {
                    msg: "Must be a valid email format."
                }
            },
            allowNull: true
        },
        website: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            get : function()  {
                return statusCode.getStatus(this.getDataValue('status'));
            },
            set : function(val) {
                this.setDataValue('status', statusCode.setStatus(val));
            }
        },
        maxProjects: {
            type: DataTypes.INTEGER,
            field:'max_projects',
            allowNull: false
        },
        maxMembers: {
            type: DataTypes.INTEGER,
            field:'max_members',
            allowNull: false
        },
        facebook: {
            type: DataTypes.STRING,
            field: 'social_facebook',
            allowNull: true
        },
        twitter: {
            type: DataTypes.STRING,
            field: 'social_twitter',
            validate: {
                len: {
                    args: [0, 50],
                    msg: "Must be between 0 to 50 character."
                },
                isAlphanumeric: {
                    msg: "Must provide alphanumeric characters only."
                }
            },
            allowNull: true
        },
        linkedin: {
            type: DataTypes.STRING,
            field: 'social_linkedin',
            allowNull: true
        },
        visibility: {
            type: DataTypes.INTEGER,
            allowNull: false,
            get      : function()  {
                return statusCode.getVisibility(this.getDataValue('visibility'));
            },
            set      : function(val) {
                this.setDataValue('visibility', statusCode.setVisibility(val));
            }

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
                Team.belongsTo(models.User, {
                    as          : 'Admin',
                    foreignKey  : 'admin_id',
                    targetKey   : 'id',
                    constraints : true
                });
                Team.hasMany(models.TeamMember, {
                    as          : 'TeamMembers',
                    foreignKey  : 'team_id',
                    targetKey   : 'id',
                    constraints : true
                });
            }
        },
        instanceMethods: {

        },
        freezeTableName: true,
        tableName: 'teams'
    });
    return Team;
};