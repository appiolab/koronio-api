'use strict';
var statusCode = require('./../lib/status_code/ProjectStatusCode')();

module.exports = function(sequelize, DataTypes) {
  var ProjectMembers = sequelize.define('ProjectMembers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    projectId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'project_id'
    },
    teamMemberId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'team_member_id'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get : function()  {
        return statusCode.getMemberStatus(this.getDataValue('status'));
      },
      set : function(val) {
        this.setDataValue('status', statusCode.setMemberStatus(val));
      }
    },
    activation_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    canEditProject: {
      type: DataTypes.BOOLEAN,
      field: 'edit_project',
      allowNull: false
    },
    canDeleteProject: {
      type: DataTypes.BOOLEAN,
      field: 'delete_project',
      allowNull: false
    },
    canAddProjectMember: {
      type: DataTypes.BOOLEAN,
      field: 'add_project_member',
      allowNull: false
    },
    canRemoveProjectMember: {
      type: DataTypes.BOOLEAN,
      field: 'remove_project_member',
      allowNull: false
    },
    canAddTask: {
      type: DataTypes.BOOLEAN,
      field: 'add_task',
      allowNull: false
    },
    canEditTask: {
      type: DataTypes.BOOLEAN,
      field: 'edit_task',
      allowNull: false
    },
    canDeleteTask: {
      type: DataTypes.BOOLEAN,
      field: 'delete_task',
      allowNull: false
    },
    canAddOwnTask: {
      type: DataTypes.BOOLEAN,
      field: 'add_own_task',
      allowNull: false
    },
    canEditOwnTask: {
      type: DataTypes.BOOLEAN,
      field: 'edit_own_task',
      allowNull: false
    },
    canDeleteOwnTask: {
      type: DataTypes.BOOLEAN,
      field: 'delete_own_task',
      allowNull: false
    },
    canEditOwnLog: {
      type: DataTypes.BOOLEAN,
      field: 'edit_own_log',
      allowNull: false
    },
    canDeleteOwnLog: {
      type: DataTypes.BOOLEAN,
      field: 'delete_own_log',
      allowNull: false
    },
    addedBy: {
      type: DataTypes.BIGINT,
      field: 'added_by',
      allowNull: false,
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
    },
    freezeTableName: true,
    tableName: 'project_members'
  });
  return ProjectMembers;
};