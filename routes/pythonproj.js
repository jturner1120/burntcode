var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('pythonproj', {title: 'Burnt Code', layout: 'interviewcodelayout.hbs', layoutDir: __dirname + '/views/layout'});
});

module.exports = router;
