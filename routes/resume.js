var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var gmailtransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'mailfrom.burntcode@gmail.com',
    pass: '3edc2wsx#EDC@WSX'
  }
});

/* GET resume home page. */
router.get('/', function(req, res, next) {
  res.render('resumecover', { title: 'Burnt Code', layout: 'resumelayout.hbs', layoutDir: __dirname + "/views/layouts"});
});

router.get('/education', function(req, res, next) {
  res.render('education', { title: 'Burnt Code', layout: 'resumelayout.hbs', layoutDir: __dirname + "/views/layouts"});
});

router.get('/skillset', function(req, res, next){
  res.render('skillset', { title: 'Burnt Code', layout: 'resumelayout.hbs', layoutDir: __dirname + '/views/layouts'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Burnt Code', layout: 'standard.hbs', layoutDir: __dirname + "/views/layouts"});
});

router.post('/contact', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var msgtext = req.body.msgtext;
  var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var mailOptions = {
      from: name + ' &lt;' + email + '&gt;',
      to: 'jeff.thomas.turner@gmail.com',
      subject: 'BurntCode Contact Form',
      text: 'Message sent by: ' + name + ', using ' + email + '.  Message: ' + msgtext
  };

  if ((name !== "") && (emailRegEx.test(email)) && (msgtext !== "")){
    var returnData = {
      class: "messageareagreen",
      message: "Your message was sent.",
      nameVal: "",
      emailVal: "",
      textVal: ""
    };

    gmailtransporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      }
    });
    res.send(returnData);
  }else{
    var nameClass = "form-control";
    var emailClass = "form-control";
    var textClass = "form-control text-area";

    if (name === ""){
      nameClass = nameClass + " fielderror";
    }
    if (!(emailRegEx.test(email))){
      emailClass = emailClass + " fielderror";
    }
    if (msgtext === ""){
      textClass = textClass + " fielderror";
    }
    var returnDataFail = {
      class: "messageareared",
      message: "There are errors on the form.",
      nameClass: nameClass,
      emailClass: emailClass,
      textClass: textClass,
      nameVal: name,
      emailVal: email,
      msgVal: msgtext
    };
    res.send(returnDataFail);
  }
});


module.exports = router;
