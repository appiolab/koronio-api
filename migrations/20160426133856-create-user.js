'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(50)
            },
            userid: {
                allowNull: false,
                type: Sequelize.STRING(25),
                unique: true
            },
            firstName: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            lastName: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            user_type: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            lastLogin: {
                type: Sequelize.DATE,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
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
        return queryInterface.dropTable('users');
    }
};