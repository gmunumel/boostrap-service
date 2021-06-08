var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createattribute', function(req, res, next) {
  res.render('createattribute', null);
});

module.exports = router;
