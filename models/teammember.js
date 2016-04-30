'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamMember = sequelize.define('TeamMember', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
      member_id: {
          allowNull: false,
          type: DataTypes.BIGINT,
          validate: {
              isInt: {
                  msg: "Must provide integer only."
              }
          }
      },
      team_id: {
          allowNull: false,
          type: DataTypes.BIGINT,
          references : {
              model : "teams",
              key   : "id",
          },
          validate: {
              isInt: {
                  msg: "Must provide integer only."
              }
          }
      },
      isActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      canCreateProject: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      canUpdateProject: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      canDeleteProject: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      canCreateTask: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      canUpdateTask: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      canDeleteTask: {
          type: DataTypes.BOOLEAN,
          allowNull: false
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

          TeamMember.belongsTo(models.User, {
              foreignKey: 'member_id',
              targetKey: 'id',
              constraints : true
          });
          TeamMember.belongsTo(models.Team, {
              foreignKey: 'team_id',
              targetKey: 'id',
              constraints : true
          });
      }
    },
    instanceMethods: {

    },
    freezeTableName: true,
    tableName: 'teamMembers'
  });
  return TeamMember;
};