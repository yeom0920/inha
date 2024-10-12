var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: '영민이 페이지', pageName:'home.ejs'});
});

module.exports = router;
