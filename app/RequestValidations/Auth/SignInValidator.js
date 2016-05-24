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
            return res.status(erObj.httpStatus).json(erObj);
        }

        return next();

    }
}