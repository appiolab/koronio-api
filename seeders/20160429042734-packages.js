'use strict';
var moment              = require('moment');

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('packages', [{
      name            : 'Free',
      description     : 'Free Package',
      rate            : 0.00,
      durationType    : 'yearly',
      duration        : 127,
      status          : 1,
      allowedTeam     : 1,
      allowedProjects : 2,
      allowedMember   : 5,
      allowedStorage  : 1024,
      createdAt       : moment().toISOString(),
      updatedAt       : moment().toISOString(),
    },
      {
        name            : 'Starter',
        description     : 'Starter Package',
        rate            : 5.00,
        durationType    : 'monthly',
        duration        : 1,
        status          : 1,
        allowedTeam     : 1,
        allowedProjects : 5,
        allowedMember   : 10,
        allowedStorage  : 2048,
        createdAt       : moment().toISOString(),
        updatedAt       : moment().toISOString(),
      },
      {
        name            : 'Super',
        description     : 'Super Package',
        rate            : 10.00,
        durationType    : 'monthly',
        duration        : 1,
        status          : 1,
        allowedTeam     : 2,
        allowedProjects : 15,
        allowedMember   : 30,
        allowedStorage  : 4096,
        createdAt       : moment().toISOString(),
        updatedAt       : moment().toISOString()
      },
      {
        name            : 'Infinity',
        description     : 'Infinity Package',
        rate            : 599.00,
        durationType    : 'Infinity',
        duration        : 1,
        status          : 1,
        allowedTeam     : 999,
        allowedProjects : 999,
        allowedMember   : 9999,
        allowedStorage  : 10240,
        createdAt       : moment().toISOString(),
        updatedAt       : moment().toISOString()
      }], {
    });

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('packages', null, {});
  }
};
