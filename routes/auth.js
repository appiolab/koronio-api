var express = require('express');
var router = express.Router();
var models      = require('../models');
var UserRepo    = require('../app/Repository/UserRepo')();
var signInValidator = require('../app/RequestValidations/Auth/SignInValidator');
var signUpValidator = require('../app/RequestValidations/Auth/SignUpValidator');

/**
 * Sign Up a user
 */
router.post('/signup', signUpValidator(function (req) {}), function(req, res, next) {


    UserRepo.signUp(req.body)
    .then(function (result) {

        return res.json(result);

    }).catch(function (err) {

        return res.json(err);
    });


});

/**
 * Sign In
 */
router.post('/signin', signInValidator(function (req) {}),function (req, res, next) {


    UserRepo.signIn(req.body)
        .then(function (user) {

            res.httpStatus = user.httpStatus;
            return res.json(user);

        })
        .catch(function (err) {

            res.httpStatus = err.httpStatus;
            return res.json(err);
        });

});

router.get('/signout', function (req, res, next) {

    res.send('success');
});

module.exports = router;