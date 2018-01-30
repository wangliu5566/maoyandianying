var express = require('express');
var UserService = require("../service/UserService.js");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/container', function(req, res, next) {
	res.send(data);
});


router.post('/login',function(req,res,next){
	UserService.login({
		username:req.body.username,
		password:req.body.password,
		//userId:req.body.user._id

	},function(data){
		//console.log(data);
		//console.log('userId')
		if(data.length !== 0){
			req.session.username=req.body.username;
			req.session.userId =data[0]._id;
			res.cookie("username", req.body.username, {
				maxAge: 0
			});
			console.log(req.session.userId);
		}
		res.send(data);
	})
});

router.post('/isLogin', function(req, res, next) {
	if (req.session.username) {
		console.log(req.session.userId);
		res.send("true");
	} else {
		res.send("false");
	}
});
router.post('/signOut', function(req, res, next) {
	res.cookie("username", "", {
		maxAge: 0
	});
	res.send("true");
});
router.post('/isUse', function(req, res, next) {
	UserService.isUse(req.body.username, function(data) {
		res.send(data);
	})
});

router.post('/reg',function(req,res,next){
	UserService.reg({
		username:req.body.username,
		password:req.body.password
	},function(data){
		res.send(data);
	})
});


















//router.post('/login', function(req, res, next) {
//	UserService.login({
//		username: req.body.username,
//		password: req.body.password
//	}, function(data) {
//		if (eval(data)) {
//			req.session.username = req.body.username;
//			res.cookie("username", req.body.username, {
//				maxAge: 1000 * 60 * 60
//			})
//		}
//		res.send(data);
//	})
//});
//
//router.post('/isLogin', function(req, res, next) {
//	if (req.session.username) {
//		res.send("true");
//	} else {
//		res.send("false");
//	}
//});
//
//router.post('/signOut', function(req, res, next) {
//	res.cookie("username", "", {
//		maxAge: 0
//	});
//	res.send("true");
//});
//
//router.post('/reg', function(req, res, next) {
//	UserService.reg({
//		username: req.body.username,
//		password: req.body.password
//	}, function(data) {
//		res.send(data);
//	})
//});
//
//
//router.post('/isUse', function(req, res, next) {
//	UserService.isUse(req.body.username, function(data) {
//		res.send(data);
//	})
//});
//
//router.get('/test', function(req, res, next) {
//		res.jsonp('hello world');
//});

module.exports = router;