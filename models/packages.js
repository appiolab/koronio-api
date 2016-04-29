'use strict';
module.exports = function(sequelize, DataTypes) {
  var packages = sequelize.define('Packages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    descriptioin: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    rate: {
        type: DataTypes.DOUBLE(10, 2),
        allowNull: false,
    },
    durationType: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    allowedTeam: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allowedProjects: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allowedMember: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allowedStorage: {
      type: DataTypes.INTEGER,
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
        // associations can be defined here
      }
    }
  });
  return packages;
};