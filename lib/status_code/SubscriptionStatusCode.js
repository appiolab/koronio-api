'use strict';
module.exports = function () {

    var status = ['inactive', 'active'];

    return {
        getStatus: function (code) {
            return status[code];
        },
        setStatus: function (code) {
            return status.indexOf(code);
        }
    }

};