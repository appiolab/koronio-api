'use strict';
module.exports = function () {

    var projectStatus = ['draft', 'new', 'in progress', 'completed', 'closed', 'deferred'];
    var visibility = ['private', 'public'];
    var priority = [ 'none', 'low', 'normal', 'high', 'urgent'];
    var memberStatus  = [''];

    return {
        getStatus: function (code) {
            return projectStatus[code];
        },
        setStatus: function (code) {
            return projectStatus.indexOf(code);
        },
        getVisibility: function (code) {
            return visibility[code];
        },
        setVisibility: function (code) {
            return visibility.indexOf(code);
        },
        getPriority: function (code) {
            return priority[code];
        },
        setPriority: function (code) {
            return priority.indexOf(code);
        },

        getMemberStatus: function (code) {
            return memberStatus[code];
        },
        setMemberStatus: function (code) {
            return memberStatus.indexOf(code);
        },
    }

};