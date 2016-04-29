'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('user_packages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            package_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                validate: {
                    isInt: {
                        msg: "Must provide integer only."
                    }
                }
            },
            user_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                validate: {
                    isInt: {
                        msg: "Must provide integer only."
                    }
                }
            },
            packageQuantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isInt: {
                        msg: "Must provide integer only."
                    }
                }
            },
            rate: {
                type: Sequelize.DOUBLE(10, 2),
                validate: {
                    isInt: {
                        msg: "Must provide double only."
                    }
                },
                allowNull: false
            },
            price: {
                type: Sequelize.DOUBLE(10, 2),
                validate: {
                    isInt: {
                        msg: "Must provide double only."
                    }
                },
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
            status: {
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
