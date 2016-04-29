/**
 * Created by ariful on 4/28/16.
 */
var errorMessage = require('../../../lib/ErrorMessage')();

module.exports = function (validator) {

    return function (req, res, next) {

        //@TODO add confirm password validation

        req.checkBody('first_name', 'Alptha numeric Name Only').isAlphanumeric();
        req.checkBody('last_name', 'Alptha numeric Name Only').isAlphanumeric();
        req.checkBody('userid', 'Alpha numeric Userid Required').notEmpty().isAlphanumeric();
        req.checkBody('email', 'Valid email address required').notEmpty().isEmail();
        req.checkBody('password', 'Invalid Password').notEmpty();

        var errors = req.validationErrors();

        if (errors) {

            var erObj       = errorMessage.validationError(errors)
            res.httpStatus  = erObj.httpStatus;

            return res.json(erObj);

        }

        return next();

    }
}