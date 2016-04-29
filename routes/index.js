var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  return res.json({
    version : 'v1',
    msg     : 'Koronio Api'
  });
  // res.render('index', { title: 'Express' });

});

module.exports = router;
