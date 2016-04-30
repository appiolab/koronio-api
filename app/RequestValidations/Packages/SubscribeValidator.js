/**
 * Created by ariful on 4/28/16.
 */
var Response = require('../../../lib/Response')();

module.exports = function (validator) {

    return function (req, res, next) {


        req.checkBody('packageQty', 'Must be integer number ').isInt();
        req.checkBody('packageQty', 'Required Field').notEmpty();
        req.checkParams('id', 'URL Id  Parameter Required').notEmpty();
        req.checkParams('id', 'Invalid URL Id Parameter').isInt();

        var errors = req.validationErrors();

        if (errors) {

            var erObj       = Response.validationError(errors)
            res.httpStatus  = erObj.httpStatus;
            return res.json(erObj);

        }

        return next();

    }
}