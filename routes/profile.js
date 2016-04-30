var express     = require('express');
var router      = express.Router();
var models      = require('../models');
var jwtAuth     = require('../middlewares/jwtAccessToken')();
var UserRepo    = require('../app/Repository/UserRepo')();
var response    = require('../lib/Response')();
var passwordValidator = require('../app/RequestValidations/Profile/changePasswordValidator');
var profileUpdateValidator = require('../app/RequestValidations/Profile/profileUpdateValidator');
/**
 * Get profile
 */
router.get('/', [jwtAuth],function(req, res) {

    return res.json(response.success(req.user, req.user.first_name));

});

/**
 * Update Profile
 *
 * Required fields:
 * - first_name
 * - last_name
 */
router.put('/', [jwtAuth, profileUpdateValidator(function (req) {})] ,function (req, res) {

    UserRepo.update(req.user.id, req.body)
        .then(function (result) {

            res.httpStatus = result.httpStatus;
            return res.json(result);
        })
        .catch(function (err) {
            
            res.httpStatus = err.httpStatus;
            return res.json(err);
        });

});

/**
 * Change Profile Password
 *
 * Required fields:
 * - newPassword
 * - confirmPassword
 */
router.put('/change-password', [jwtAuth, passwordValidator(function (req) {})],
    function (req, res) {

    UserRepo.updatePassword(req.body, req.user.id)
        .then(function (result) {

            res.httpStatus = result.httpStatus;
            return res.json(result);
        })
        .catch(function (err) {

            res.httpStatus = err.httpStatus;
            return res.json(err);
        });

});


module.exports = router;
