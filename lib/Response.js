/**
 * Created by ariful on 4/28/16.
 */
'use strict';
module.exports = function () {

    return {
        created: function (obj, message) {
            return {
                status: true,
                httpStatus: 201,
                message: message,
                result: obj
            }
        },
        updated: function (obj, message) {
            return {
                status: true,
                httpStatus: 200,
                message: message,
                result: obj
            }
        },
        success: function (obj, message) {
            return {
                status: true,
                httpStatus: 200,
                message: message,
                result: obj
            }
        },
        deleted: function (message) {
            return {
                status: true,
                httpStatus: 204
            }

        },
        generalError: function (error) {
            return {
                status: false,
                httpStatus: 500,
                errors: error
            }
        },
        notFoundError: function (error) {
            return {
                status: false,
                httpStatus: 404,
                errors: error
            }
        },
        unauthorizeError: function (error) {
            return {
                status: false,
                httpStatus: 401,
                errors: error
            }

        },
        invalidTokenError: function (error) {
            return {
                status: false,
                httpStatus: 403,
                errors: error
            }
        },
        validationError: function (errors) {
            return {
                status: false,
                httpStatus: 422,
                errors: errors
            }

        }
    }
};