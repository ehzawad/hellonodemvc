// Declaration
var express = require('express');
var router = express.Router();

var loginModel = require.main.require('./models/login-model');

// Request Handler
router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password
	};

	loginModel.validateUser(user, function(valid){
		if(valid)
		{
			//res.render('home/index');
			res.redirect('/home');
		}
		else
		{
			res.render('login/error');
		}
	});



		
});


// Export (mandatory)
module.exports = router;