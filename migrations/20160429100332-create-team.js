'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slug: {
          type: Sequelize.STRING(50),
          validate: {
              isAlphanumeric: {
                  msg: "Must provide alphanumeric characters only."
              }
          },
          allowNull: false
      },
      admin_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
      },
      name: {
          type: Sequelize.STRING(50),
          allowNull: false
      },
      details: {
          type: Sequelize.STRING(256),
          allowNull: true
      },
      email:{
          type: Sequelize.STRING(50),
          validate: {
              isEmail: {
                  msg: "Must be a valid email format."
              }
          },
          allowNull: false
      },
      website: {
          type: Sequelize.STRING(256),
          allowNull: true
      },
      status: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      maxProjects: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      maxMembers: {
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('teams');
  }
};