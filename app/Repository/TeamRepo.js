/**
 * Created by ariful on 4/27/16.
 */
"use strict";

var responsePayload     = require('./../../lib/Response')();
var models              = require('../../models');
var moment              = require('moment');
var env                 = require('dotenv').config();

module.exports = function (){

    return {
        /**
         *
         * @param status active | inactive | all
         */
        getAll: function (adminId, status, offset, limit) {
            return new Promise(function (resolve, reject) {

                var getTeam = models.Team.findAll({
                        where: {
                            adminId: adminId
                        },
                        include    : [
                            {
                                model: models.User,
                                as: 'Admin',
                                attributes: ['id', 'userid', 'firstName', 'lastName', 'status', 'userType', 'lastLogin']
                            }
                        ]
                    })
                    .then(function (team) {
                        if (team != null){
                            return resolve(responsePayload.success({teams: team}));
                        }else{
                            return reject(responsePayload.notFoundError(team));
                        }
                    })
                    .catch(function (error) {
                        console.log('error; ', error);
                        return reject(responsePayload.generalError(error));
                    });
            });

        },
        findById: function (id) {

        },
        getByTeamid: function (teamid) {
            return new Promise(function (resolve, reject) {

                var getTeam = models.Team.findOne({
                        where: {
                            teamid: teamid
                        },
                        include    : [
                            {
                                model: models.User,
                                as: 'Admin',
                                attributes: ['id', 'userid', 'firstName', 'lastName', 'status', 'userType', 'lastLogin']
                            }
                        ]
                    })
                    .then(function (team) {

                        if (team != null){
                            return resolve(responsePayload.success({team: team}));
                        }else{
                            return reject(responsePayload.notFoundError(team));
                        }

                    })
                    .catch(function (error) {
                        return reject(responsePayload.generalError(error));
                    });

            });

        },
        create: function (data) {

            //@TODO TeamRepo: add team privacy: Public | Private
            var teamObject = {
                name            : data.name,
                teamid          : data.teamid,
                adminId         : data.adminId,
                details         : data.details,
                website         : data.website,
                email           : data.email,
                linkedin        : data.linkedin,
                facebook        : data.facebook,
                twitter         : data.twitter,
                status          : 'active',
                visibility      : 'private',
                maxProjects     : 10,
                maxMembers      : 10
            }

            return new Promise(function (resolve, reject) {

                var team = models.Team.build(teamObject)
                    .save(teamObject)
                    .then(function (newTeam) {
                        return resolve(
                            responsePayload.created({team: newTeam}, 'Team Created')
                        );
                    })
                    .catch(function (err) {
                        console.log('err: ', err);
                        if (err.message === 'Validation error' || err.name == 'SequelizeValidationError'){
                            return reject(responsePayload.validationError(err.errors, 'TeamRepo', 'create'))
                        } else {
                            return reject(responsePayload.generalError(err.errors, 'TeamRepo', 'create'));
                        }
                    });
            });


        },
        update: function (id, data) {
            
        },
        delete: function (id) {
            
        },
        addMembers: function (members) {
            
        },
        removeMember: function (memberId) {

        },
        getMembers: function (id) {
            
        },
        getProjects: function (id) {
            
        }
    }

};