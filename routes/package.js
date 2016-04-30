var express     = require('express');
var router      = express.Router();
var models      = require('../models');
var jwtAuth     = require('../middlewares/jwtAccessToken')();
var PackageRepo = require('../app/Repository/PackageRepo')();
var SubscribeValidator = require('../app/RequestValidations/Packages/SubscribeValidator');
/**
 * Get all packages
 *
 * @TODO get all packages
 */

router.put('/', [jwtAuth] ,function (req, res) {


});

/**
 * Get a package by Id
 *
 * @TODO: Route: packages/:id get package by id
 */
router.get('/:id', [jwtAuth], function (req, res) {

    PackageRepo.getPackage(req.params.id)
        .then(function (result) {
            res.httpStatus = result.httpStatus;
            return res.json(result);
        })
        .catch(function (err) {
            res.httpStatus = err.httpStatus;
            return res.json(err);
        })
    
});



/**
 * Get a package by Id
 *
 * @TODO: Route: packages/:id get package by id
 */
// router.get('/:id', [jwtAuth], function (req, res) {
//
//     PackageRepo.getPackage(req.params.id)
//         .then(function (result) {
//             res.httpStatus = result.httpStatus;
//             return res.json(result);
//         })
//         .catch(function (err) {
//             res.httpStatus = err.httpStatus;
//             return res.json(err);
//         })
//
// });

/**
 * Subscribe to a package
 *
 */
router.post('/:id/subscribe', [jwtAuth, SubscribeValidator(function (req) {})], function (req, res) {

     PackageRepo.subscribe(
                    req.params.id,
                    req.body.packageQty,
                    req.user)
         .then(function (result) {

             res.httpStatus = result.httpStatus;
             return res.json(result);

         })
         .catch(function (error) {
             res.httpStatus = error.httpStatus;
             return res.json(error);

         });

});


module.exports = router;
