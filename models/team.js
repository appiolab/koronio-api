'use strict';
module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define('Team', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        slug: {
            type: DataTypes.STRING(50),
            validate: {
                isAlphanumeric: {
                    msg: "Must provide alphanumeric characters only."
                }
            },
            allowNull: false
        },
        admin_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
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
            allowNull: false
        },
        website: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        maxProjects: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        maxMembers: {
            type: DataTypes.INTEGER,
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
                // associations can be defined here
            }
        }
    });
    return Team;
};