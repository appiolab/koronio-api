/**
 * Created by ariful on 4/27/16.
 */
"use strict";

var errorMessage        = require('./../../lib/ErrorMessage')();
var models              = require('../../models');
var moment              = require('moment');
var bcrypt              = require('bcryptjs');
var salt                = bcrypt.genSaltSync(10);

module.exports = function (){

    return {
        /**
         *
         * @returns {string}
         */
        signIn: function (data) {

            var email       = data.email;

            return new Promise( function (resolve, reject) {

               var user = models.User.findOne({
                        where: {
                            email: email
                        }})
                    .then(function (result) {

                        var isPasswordMatch = bcrypt.compareSync(data.password, result.password);

                        if (isPasswordMatch == true){

                            //@TODO generate a jwt token and sent it with user

                            return resolve({
                                status: true,
                                httpStatus: 200,
                                result: {
                                    user: result
                                }
                            });

                        } else{
                            return reject(errorMessage.unauthorizeError('Password does not match!'));
                        }
                    })
                    .catch(function (err) {
                        return reject(errorMessage.unauthorizeError('Email address not found!'));
                    });

            });


        },
        /**
         *
         * @returns {*|{status, httpStatus, error}}
         */
        signUp: function (data) {

            //@TODO use json data transformer to convert plain data to more readable.

            var userObject = {
                email       : data.email,
                userid      : data.userid,
                firstName   : data.first_name,
                lastName    : data.last_name,
                password    : bcrypt.hashSync(data.password, salt),
                isActive    : 1,
                userType    : 3,                // app user
                lastLogin   : moment().toISOString()
            };

            return new Promise(function (resolve, reject) {

                var user = models.User.build(userObject)
                    .save(userObject)
                    .then(function (newUser) {
                        return resolve({
                            status: true,
                            httpStatus: 201,
                            result: {
                                user: newUser
                            }
                        });
                    })
                    .catch(function (err) {
                        return reject(errorMessage.generalError(err, 'UserRepo', 'signUp'));
                    });
            });

        },
        signOut: function () {

        }
    }

};