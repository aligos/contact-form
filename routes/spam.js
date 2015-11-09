var express = require('express');
var router = express.Router();
var transport = require('nodemailer-direct-transport');
var nodemailer = require('nodemailer');
var options = {};

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('spam', { title: 'spam' });
});

router.post('/send', function(req, res, next){

	var transporter = nodemailer.createTransport(transport(options));
		transporter.sendMail({
		    from: req.body.email,
		    to: 'artasikindonesia@gmail.com',
		    subject: 'New Submission Express',
		    text: 'pesan: '+req.body.message,
		    html: '<p>You got new submission with the following details ..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Pesan: '+req.body.message+'</li></ul>'
			}, function(error, info){
				if(error){
					console.log(error);
					res.redirect('/');
				} else {
					console.log('Message sent:');
					res.redirect('/');
				}
		});
	

});
module.exports = router;
