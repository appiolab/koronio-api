var express     = require('express');
var router      = express.Router();
var models      = require('../models');
var jwtAuth     = require('../middlewares/jwtAccessToken')();
var UserRepo    = require('../app/Repository/UserRepo')();

/**
 * Get profile
 * @TODO profile: get teams
 */
router.get('/', [jwtAuth],function(req, res) {

    res.json({
        user: req.user
    });
});

/**
 * Create new team
 * @TODO team: create new team
 */
router.post('/', [jwtAuth], function (req, res) {

});

/**
 * Update team
 * @TODO team: update team
 */
router.put('/:id', [jwtAuth], function (req, res) {



});

/**
 * Delete team
 */
router.delete('/:id', [jwtAuth], function (req, res) {

});

/**
 * add Member
 */
router.post('/:id/add-member', [jwtAuth], function (req, res) {

    
});

/**
 * Remove Member
 */
router.delete('/:id/remove-member', [jwtAuth], function (req, res) {


});

module.exports = router;
