var express = require('express');
var router = express.Router();

/* GET resume home page. */
router.get('/', function(req, res, next) {
  res.render('resumecover', { title: 'Burnt Code', layout: 'resumelayout.hbs', layoutDir: __dirname + "/views/layouts"});
});


module.exports = router;
