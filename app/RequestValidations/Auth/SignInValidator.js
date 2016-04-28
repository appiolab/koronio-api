/**
 * Created by ariful on 4/28/16.
 */

var errorMessage = require('../../../lib/ErrorMessage')();


module.exports = function (validator) {

    return function (req, res, next) {

        req.checkBody('email', 'Invalid Email').notEmpty().isEmail();
        req.checkBody('password', 'Invalid Password').notEmpty();

        var errors = req.validationErrors();

        if (errors) {

            var erObj = errorMessage.validationError(errors);
            res.httpStatus = erObj.httpStatus;

            return res.json(erObj);
        }

        return next();

    }
}