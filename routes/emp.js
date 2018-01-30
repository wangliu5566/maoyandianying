var express = require('express');
var EmpService = require("../service/EmpService.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});


router.post('/getEmp', function(req, res, next) {
	EmpService.getEmp(function(data) {
		res.send(data);
	})
});

router.post('/getEmpByPage', function(req, res, next) {
	EmpService.getEmpByPage({
		curPage: req.body.curPage,
		eachPage: req.body.eachPage
	}, function(data) {
		res.send(data);
	})
});

module.exports = router;