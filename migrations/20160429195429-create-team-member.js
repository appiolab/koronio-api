'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('team_members', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            team_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                references : {
                    model : "teams",
                    key   : "id",
                }
            },
            role_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            designation: {
                type: Sequelize.STRING,
                allowNull: true
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            activation_code: {
                type: Sequelize.STRING,
                allowNull: true
            },
            activation_date: {
                type: Sequelize.DATE,
                allowNull: true
            },
            create_project: {
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
        return queryInterface.dropTable('team_members');
    }
};