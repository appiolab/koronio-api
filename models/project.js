'use strict';
var statusCode = require('./../lib/status_code/ProjectStatusCode')();

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 50],
          msg: "Must be between 3 to 50 character."
        },
        notNull: {
          msg: "Can not be null."
        },
        notEmpty: {
          msg: "Can not be empty."
        }
      }
    },
    code: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 10],
          msg: "Must be between 3 to 10 character."
        },
        isAlphanumeric: {
          msg: "Must provide alphanumeric characters only."
        },
        notNull: {
          msg: "Can not be null."
        },
        notEmpty: {
          msg: "Can not be empty."
        }
      }
    },
    description: {
      type: DataTypes.STRING
    },
    teamId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field:'admin_id'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get : function()  {
        return statusCode.getStatus(this.getDataValue('status'));
      },
      set : function(val) {
        this.setDataValue('status', statusCode.setStatus(val));
      }
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get : function()  {
        return statusCode.getPriority(this.getDataValue('priority'));
      },
      set : function(val) {
        this.setDataValue('priority', statusCode.setPriority(val));
      }
    },
    visibility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get      : function()  {
        return statusCode.getVisibility(this.getDataValue('visibility'));
      },
      set      : function(val) {
        this.setDataValue('visibility', statusCode.setVisibility(val));
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field:'start_date',
      validate: {
        isDate: {
          msg: "Must be a valid date."
        }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field:'end_date',
      validate: {
        isDate: {
          msg: "Must be a valid date."
        }
      }
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field:'created_by'
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      }
    },
    freezeTableName: true,
    tableName: 'projects'
  });
  return Project;
};