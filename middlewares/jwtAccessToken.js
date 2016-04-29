/**
 * Created by ariful on 4/29/16.
 */
'use strict';

var errorMessage = require('../lib/ErrorMessage')();
var jwt                 = require('jsonwebtoken');
var env                 = require('dotenv').config();

module.exports = function () {

  return function (req, res, next) {

      // var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers["authorization"];
      var bearerHeader  = req.headers["authorization"];


      if (typeof bearerHeader !== 'undefined') {

          var bearer = bearerHeader.split(" ");


          if(bearer[0] === 'Bearer'){

              var accessToken = bearer[1];

              // verifies secret and checks exp
              jwt.verify(accessToken, process.env.JWT_SECRET, function(err, user) {

                  if (err) {

                      //Invalid Token message
                      return res.json(errorMessage.invalidTokenError('Invalid token provided!'));

                  } else {

                      // if everything is good, save to request for use in other routes
                      req.user = user;
                      req.accessToken = accessToken;

                      next();
                  }
              });

          } else {

              return res.json(errorMessage.invalidTokenError('Bearer is not defined!'));
          }


      } else {

          return res.json(errorMessage.invalidTokenError('Access Token (JWT) not found!'));
      }

  };

};