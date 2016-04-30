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
        getAll: function (status, offset, limit) {

        },
        findById: function (id) {

        },
        create: function (data) {
            
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