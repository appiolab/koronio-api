/**
 * Created by ariful on 4/27/16.
 */
"use strict";

var response    = require('./../../lib/Response')();
var models      = require('../../models');
var moment      = require('moment');
var env         = require('dotenv').config();

module.exports = function (){

    return {
        /**
         * @TODO Package > PackageRepo: Get all packages
         *
         * PRIORITY: HIGH
         *
         * Get all Packages
         */
        getAllPackages: function (activeOnly) {

            return new Promise(function (resolve, reject) {

                models.Package.findAll({
                            where: {
                                status: activeOnly==true?1:0
                            }
                        }
                    )
                    .then(function (result) {

                        if (result !== null){
                            return resolve(
                                response.success(result, 'Packages found!')
                            );
                        } else{
                            return resolve(
                                response.notFoundError('Package Not Found!')
                            );
                        }
                    })
                    .catch(function (err) {
                        return reject(response.generalError(err));
                    });
            });

        },
        /**
         * Get a package
         *
         * @param id
         */
        getPackage: function (id) {

            return new Promise(function (resolve, reject) {

                
                models.Package.findOne({
                    where: {
                        id: id
                    }
                })
                    .then(function (result) {

                        if (result !== null){
                            return resolve(
                                
                                response.success(result, 'Package Found')
                            );
                        } else{
                            return resolve(
                                response.notFoundError('Package Not Found')
                            );
                        }

                    })
                    .catch(function (err) {
                        return reject(response.generalError(err));
                    });

            });

        },
        /**
         * @TODO Package > PackageRepo: Get All Users subscribe to the package
         *
         * MEDIUM PRIORITY
         *
         * Get All Users subscribe to the package
         * @param id
         */
        getPackageUsers: function (id) {

        },
        /**
          @TODO Package > PackageRepo: Subscribe to the package
         *
         * User subscribe to the package
         *
         * HIGH PRIORITY
         *
         * @param packageId
         * @param packageQty
         * @param user
         */
        subscribe: function (packageId, packageQty, user) {
            /**
             * Task Description
             *
             * 1. Get package by id,
             * 2. Calculate package Quantity to decide subscribe features.
             * 3. Save to Subscribe model
             *
             */

            return new Promise(function (resolve, reject) {

                models.Package.findOne({
                        where: {
                            id: packageId
                        }
                    })
                    .then(function (result) {

                        if (result !== null){

                            var subscriptionData = {
                                package_id          : parseInt(packageId),
                                user_id             : user.id,
                                packageQuantity     : packageQty,
                                rate                : result.rate,
                                price               : (result.rate * packageQty),
                                durationType        : result.durationType,
                                duration            : (result.duration * packageQty),
                                status              : 1,    //active
                                activationDate      : moment().format(),
                                expireDate          : result.getSubscriptionExpireDate(packageQty),
                                deactivationDate    : result.getDeactivationDate(packageQty),
                                allowedTeam         : result.allowedTeam,
                                allowedProjects     : result.allowedProjects,
                                allowedMember       : result.allowedMember,
                                allowedStorage      : result.allowedStorage
                            }

                            models.Subscription.build(subscriptionData)
                                .save(subscriptionData)
                                .then(function (success) {

                                    /**
                                     * Deactivate any older subscriptions of the user.
                                     */
                                    models.Subscription.deactivateEarlierSubscriptionByUser(user.id, success.id);

                                    return resolve(
                                        response.created(success,
                                            'Successfully subscribed to '+ result.name+' package!'));
                                })
                                .catch(function (error) {
                                    console.log('general error', error);
                                    return reject(response.generalError(error));
                                });

                        } else{
                            return resolve(
                                response.notFoundError('Package Not Found')
                            );
                        }

                    })
                    .catch(function (err) {
                        return reject(response.generalError(err));
                    });

            });

        },
        /**
         * @TODO Package > PackageRepo: Unsubscribe to the package
         *
         * LOW PRIORITY
         *
         * Un Subscribe a user from the package
         *
         * @param id Package Id
         * @param user user
         */
        unsubscribe: function (id, user) {


        }
    }
};