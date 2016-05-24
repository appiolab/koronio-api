'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      slug: {
          type: Sequelize.STRING(50),
          validate: {
              isAlphanumeric: {
                  msg: "Must provide alphanumeric characters only."
              }
          },
          unique: true,
          allowNull: false
      },
      admin_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references : {
              model : "users",
              key   : "id",
          }
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
          allowNull: true
      },
      website: {
          type: Sequelize.STRING(256),
          allowNull: true
      },
      status: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      max_projects: {
          type: Sequelize.INTEGER,
          defaultValue: 2,
          allowNull: false
      },
      max_members: {
          type: Sequelize.INTEGER,
          defaultValue: 5,
          allowNull: false
      },
      visibility: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
        social_facebook: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        social_twitter: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        social_linkedin: {
            type: Sequelize.STRING(50),
            allowNull: true
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