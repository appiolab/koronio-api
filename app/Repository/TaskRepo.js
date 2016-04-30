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
         * @param projectId
         * @param status New | In Progress, Completed | Closed | Inactive
         * @param offset
         * @param limit
         */
        getAll: function (projectId, status, offset, limit) {

        },
        findById: function (taskId) {

        },
        create: function (data) {
            
        },
        update: function (taskId, data) {
            
        },
        delete: function (id) {
            
        },
        open: function (members) {
            
        },
        close: function (memberId) {

        },
        updateProgress: function (progress) {

        }
    }

};