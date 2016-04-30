/**
 * Created by ariful on 4/28/16.
 */
var Response = require('../../../lib/Response')();

module.exports = function (validator) {

    return function (req, res, next) {

        req.checkBody('first_name', 'Alphanumeric Characters Only ').notEmpty().notNull().isAlphanumeric();
        req.checkBody('last_name', 'Alphanumeric Characters Only ').notEmpty().notNull().isAlphanumeric();

        var errors = req.validationErrors();

        if (errors) {
            var erObj       = Response.validationError(errors);
            res.httpStatus  = erObj.httpStatus;
            return res.json(erObj);

        }
        return next();
    }
}