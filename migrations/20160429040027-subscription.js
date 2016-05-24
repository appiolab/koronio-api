'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('subscriptions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            package_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                references : {
                    model : "packages",
                    key   : "id",
                }
            },
            user_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                references : {
                    model : "users",
                    key   : "id",
                }
            },
            packageQuantity: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            rate: {
                type: Sequelize.DOUBLE(10, 2),
                allowNull: false
            },
            price: {
                type: Sequelize.DOUBLE(10, 2),
                allowNull: false
            },
            durationType: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            duration: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            activationDate: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            expireDate: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            deactivationDate: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            allowedTeam: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            allowedProjects: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            allowedMember: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            allowedStorage: {
                type: Sequelize.INTEGER,
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
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('user_packages');
    }
};
