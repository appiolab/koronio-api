'use strict';
var statusCode = require('./../lib/status_code/ProjectStatusCode')();

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      },
      team_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references : {
          model : "teams",
          key   : "id"
        }
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: statusCode.setStatus('active'),
        allowNull: false
      },
      priority: {
        type: Sequelize.INTEGER,
        defaultValue: statusCode.setVisibility('normal'),
        allowNull: false
      },
      visibility: {
        type: Sequelize.INTEGER,
        defaultValue: statusCode.setVisibility('draft'),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: true
      },
      start_date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      end_date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references : {
          model : "users",
          key   : "id"
        }
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
    return queryInterface.dropTable('Projects');
  }
};