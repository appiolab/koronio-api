'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('project_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      team_member_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references : {
          model : "team_members",
          key   : "id"
        }
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      project_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references : {
          model : "projects",
          key   : "id"
        }
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
      edit_project: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      delete_project: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      add_project_member: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      remove_project_member: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      add_task: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      edit_task: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      delete_task: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      add_own_task: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      edit_own_task: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      delete_own_task: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      edit_own_log: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      delete_own_log: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      added_by:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references : {
          model : "team_members",
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
    return queryInterface.dropTable('project_members');
  }
};