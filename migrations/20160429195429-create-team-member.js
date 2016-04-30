'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('teamMembers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            member_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                references : {
                    model : "users",
                    key   : "id",
                }
            },
            team_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                references : {
                    model : "teams",
                    key   : "id",
                }
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            canCreateProject: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            canUpdateProject: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            canDeleteProject: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            canCreateTask: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            canUpdateTask: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            canDeleteTask: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('teamMembers');
    }
};