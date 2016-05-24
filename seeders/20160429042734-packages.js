'use strict';
var moment              = require('moment');

module.exports = {
  up: function (queryInterface, Sequelize) {

    console.log('createdAt: ', moment().format('YYYY-MM-DD HH:mm:ss.SSS'));


    return queryInterface.bulkInsert('packages', [{
      name            : 'Free',
      description     : 'Free Package',
      isPaid          : false,
      rate            : 0.00,
      durationType    : 'yearly',
      duration        : 127,
      status          : 1,
      allowedTeam     : 1,
      allowedProjects : 2,
      allowedMember   : 5,
      allowedStorage  : 1024,
      createdAt       : moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
      updatedAt       : moment().format('YYYY-MM-DD HH:mm:ss.SSS')
    },
      {
        name            : 'Starter',
        description     : 'Starter Package',
        isPaid          : true,
        rate            : 5.00,
        durationType    : 'monthly',
        duration        : 1,
        status          : 1,
        allowedTeam     : 1,
        allowedProjects : 5,
        allowedMember   : 10,
        allowedStorage  : 2048,
        createdAt       : moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
        updatedAt       : moment().format('YYYY-MM-DD HH:mm:ss.SSS')
      },
      {
        name            : 'Super',
        description     : 'Super Package',
        isPaid          : true,
        rate            : 10.00,
        durationType    : 'monthly',
        duration        : 1,
        status          : 1,
        allowedTeam     : 2,
        allowedProjects : 15,
        allowedMember   : 30,
        allowedStorage  : 4096,
        createdAt       : moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
        updatedAt       : moment().format('YYYY-MM-DD HH:mm:ss.SSS')
      },
      {
        name            : 'Infinity',
        description     : 'Infinity Package',
        isPaid          : true,
        rate            : 599.00,
        durationType    : 'Infinity',
        duration        : 1,
        status          : 1,
        allowedTeam     : 999,
        allowedProjects : 999,
        allowedMember   : 9999,
        allowedStorage  : 10240,
        createdAt       : moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
        updatedAt       : moment().format('YYYY-MM-DD HH:mm:ss.SSS')
      }
    ], {
    });

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('packages', null, {});
  }
};
