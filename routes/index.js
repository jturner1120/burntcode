var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Burnt Code', layout: 'coverlayout.hbs', layoutDir: __dirname + "/views/layouts"});
});

router.get('/projects', function(req, res, next){
  res.render('projects', { title: 'Burnt Code', layout: 'interviewcodelayout.hbs', layoutDir: __dirname + "/views/layouts"});
});


module.exports = router;
