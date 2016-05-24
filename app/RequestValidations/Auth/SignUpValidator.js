/**
 * Created by ariful on 4/28/16.
 */
var errorMessage = require('../../../lib/ErrorMessage')();

module.exports = function (validator) {

    return function (req, res, next) {

        //@TODO add confirm password validation

        req.checkBody('first_name', 'First Name Required').notEmpty();
        req.checkBody('last_name', 'Last Name Required').notEmpty();
        req.checkBody('userid', 'Alpha numeric Userid Required').notEmpty().isAlphanumeric();
        req.checkBody('email', 'Valid email address required').notEmpty().isEmail();
        req.checkBody('password', 'Invalid Password').notEmpty();

        var errors = req.validationErrors();
        if (errors) {
            var erObj       = errorMessage.validationError(errors);
            return res.status(erObj.httpStatus)
                    .json(erObj);
        }

        return next();

    }
}