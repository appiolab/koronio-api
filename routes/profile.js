var express     = require('express');
var router      = express.Router();
var models      = require('../models');
var jwtAuth     = require('../middlewares/jwtAccessToken')();
var UserRepo    = require('../app/Repository/UserRepo')();

/**
 * Get profile
 * @TODO profile: get profile
 */
router.get('/', [jwtAuth],function(req, res) {

    res.json({
        user: req.user
    });
});

/**
 * Update Profile
 * @TODO profile: update profile
 */
router.put('/', [jwtAuth] ,function (req, res) {


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

module.exports = router;
