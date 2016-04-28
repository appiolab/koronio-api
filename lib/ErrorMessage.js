/**
 * Created by ariful on 4/28/16.
 */
'use strict';
module.exports = function () {

    return {
        generalError: function (error) {
            return {
                status: false,
                httpStatus: 500,
                errors: error
            }
        },
        notFoundError: function () {
            return {
                status: false,
                httpStatus: 404,
                errors: {
                    msg: 'Item Not Found Here'
                }
            }
        },
        unauthorizeError: function (error) {
            return {
                status: false,
                httpStatus: 401,
                errors: error
            }

        },
        validationError: function (errors) {
            return {
                status: false,
                httpStatus: 422,
                errors: errors
            }

        },


    }
};