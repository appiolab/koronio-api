var express     = require('express');
var router      = express.Router();
var models      = require('../models');
var jwtAuth     = require('../middlewares/jwtAccessToken')();
var TeamRepo    = require('../app/Repository/TeamRepo')();

/**
 * Get profile
 * @TODO profile: get teams
 */
router.get('/', [jwtAuth], function(req, res) {

    TeamRepo.getAll(req.user.id)
        .then(function (result) {
            return res.status(result.httpStatus)
                .json(result);

        }).catch(function (err) {
        return res.status(err.httpStatus)
            .json(err);
    });
    
});


router.get('/:id', [jwtAuth], function(req, res) {

    
});


router.get('/teamid/:teamid', [jwtAuth], function(req, res) {

    TeamRepo.getByTeamid(req.params.teamid)
        .then(function (result) {
            return res.status(result.httpStatus)
                .json(result);

        }).catch(function (err) {
        return res.status(err.httpStatus)
            .json(err);
    });
    
});


/**
 * Create new team
 * @TODO team: create new team
 */
router.post('/', [jwtAuth], function (req, res) {
    
    TeamRepo.create(req.body)
    .then(function (result) {
        return res.status(result.httpStatus)
            .json(result);

    }).catch(function (err) {
        return res.status(err.httpStatus)
            .json(err);
    });
    
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
