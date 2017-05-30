var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send('send some content');
});

router.get('/cool', function(req, res, next){
	res.send('You are so cool');
});


module.exports = router;
