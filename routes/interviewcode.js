var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('interviewcode', {title: 'Burnt Code', layout: 'interviewcodelayout.hbs', layoutDir: __dirname + '/views/layout'});
});

router.get('/stocks', function(req, res, next){
  res.render('array_stocks', {title:'Burnt Code', layout: 'interviewcodelayout.hbs', layoutDir: __dirname + '/views/layout'});
});

router.get('/deleteduplicates', function(req, res, next){
  res.render('linkedlist_duplicates', {title:'Burnt Code', layout: 'interviewcodelayout.hbs', layoutDir: __dirname + '/views/layout'});
});

module.exports = router;
