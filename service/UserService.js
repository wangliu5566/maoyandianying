var UserDao = require("../dao/UserDao.js");
module.exports.login=function(user,callback){
    UserDao.login(user,function(data){
		//if(data.length===1){
		//	console.log('a');
		//	callback('true');
		//}else{
		//	console.log('b');
		//	callback('false');
		//}
		callback(data);
	})
};

module.exports.reg=function(user,callback){
	UserDao.reg(user,function(data){
		if(data){
			callback('true');

		}else{
			callback('false');
		}
	})
};

module.exports.isUse = function(username, callback) {
	UserDao.isUse(username, function(data) {
		if (data.length === 0) {
			callback("false")
		} else {
			callback("true")
		}
	})
};






















//module.exports.reg = function(user, callback) {
//	UserDao.reg(user, function(data) {
//		if (data) {
//			callback("true");
//		} else {
//			callback("false");
//		}
//	})
//};
//
//module.exports.isUse = function(username, callback) {
//	UserDao.isUse(username, function(data) {
//		if (data.length === 0) {
//			callback("false")
//		} else {
//			callback("true")
//		}
//	})
//};
//
//module.exports.login = function(user, callback) {
//	UserDao.login(user, function(data) {
//		if (data.length === 1) {
//			callback("true")
//		} else {
//			callback("false")
//		}
//	})
//};