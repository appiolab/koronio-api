'use strict';
module.exports = function () {

    var status = ['inactive', 'active'];
    var userType = ['none', 'admin', 'moderator', 'user'];

    return {
        getStatus: function (code) {
            return status[code];
        },
        setStatus: function (code) {
            return status.indexOf(code);
        },

        getUserType: function (code) {
            return userType[code];
        },
        setUserType: function (code) {
            return userType.indexOf(code);
        },
    }

};