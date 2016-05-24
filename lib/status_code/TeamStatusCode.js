'use strict';
module.exports = function () {

    var status = ['inactive', 'active'];
    var visibility = ['private', 'public'];
    var role = ['none', 'admin', 'member', 'guest'];

    return {
        getStatus: function (code) {
            return status[code];
        },
        setStatus: function (code) {
            return status.indexOf(code);
        },
        getVisibility: function (code) {
            return visibility[code];
        },
        setVisibility: function (code) {
            return visibility.indexOf(code);
        },
        getMemberRole: function (code) {
            return role[code];
        },
        setMemberRole: function (code) {
            return role.indexOf(code);
        },
    }
};