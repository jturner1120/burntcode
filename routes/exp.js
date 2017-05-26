// Module for experimenting and learning code

var express = require('express');
var router = express.Router();

// Experiments Startpage
router.get('/', function(req, res, next){
	 res.render('expindex', { title: 'Burnt Code', layout: 'explayout.hbs', layoutDir: __dirname + "/views/layouts" });
});


module.exports = router;
