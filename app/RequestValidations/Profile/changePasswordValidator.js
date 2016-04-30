/**
 * Created by ariful on 4/28/16.
 */
var Response = require('../../../lib/Response')();

module.exports = function (validator) {

    return function (req, res, next) {

        req.checkBody('newPassword', 'newPassword field is required ').notEmpty();
        req.checkBody('newPassword', 'Must be between 3 and 18 chars long').len(3, 18);
        req.checkBody('confirmPassword', 'confirmPassword field is required ').notEmpty();
        req.assert('confirmPassword', 'Passwords do not match').equals(req.body.newPassword);

        var errors = req.validationErrors();

        if (errors) {
            var erObj       = Response.validationError(errors);
            res.httpStatus  = erObj.httpStatus;
            return res.json(erObj);

        }
        return next();
    }
}