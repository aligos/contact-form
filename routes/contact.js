var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'yourgmail@gmail.com',
			pass: 'yourpassword'
		}
	});
	var mailOptions = {
		from: req.body.email,
		to: 'yourgmail@gmail.com',
		subject: 'Website Submission',
		text: 'You have a new submission with the following details .. Name: '+req.body.name+'Email: '+req.body.email+'Pesan: '+req.body.message,
		html: '<p>You got new submission with the following details ..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Pesan: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message sent:'+info.response);
			res.redirect('/');
		}

	});
});
module.exports = router;
