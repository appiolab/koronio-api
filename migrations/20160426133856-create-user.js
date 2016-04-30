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
                type: Sequelize.STRING(50),
                validate: {
                    isEmail: {
                        msg: "Must be a valid email format."
                    }
                }
            },
            userid: {
                allowNull: false,
                type: Sequelize.STRING(25),
                unique: true,
                validate: {
                    isAlphanumeric: {
                        msg: "Must provide alphanumeric characters only."
                    }
                }
            },
            firstName: {
                type: Sequelize.STRING(50),
                allowNull: true,
                validate: {
                    isAlphanumeric: {
                        msg: "Must provide alphanumeric characters only."
                    }
                }
            },
            lastName: {
                type: Sequelize.STRING(50),
                allowNull: true,
                validate: {
                    isAlphanumeric: {
                        msg: "Must provide alphanumeric characters only."
                    }
                }
            },
            isActive: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isIn: {
                        args: [[0, 1]],
                        msg: "Must be 0 or 1 only."
                    }
                }
            },
            userType: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isIn: {
                        args: [[1, 2, 3]],
                        msg: "Must be 1, 2 or 3 only"
                    }
                }
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