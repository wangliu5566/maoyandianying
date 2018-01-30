var mongoose = require("mongoose");
module.exports.login=function(user,callback){
	var UserModel=mongoose.model('users');
	UserModel.find(user,function(err,data){
		callback(data);
	})
};


module.exports.reg=function(user,callback){
	var UserModel=mongoose.model('users');
	UserModel.create(user,function(err,data){
		callback(data);
	})
};

module.exports.isUse = function(username, callback) {
	var UserModel = mongoose.model("users");
	UserModel.find({
		username: username
	}, function(err, data) {
		callback(data);
	})
};














//module.exports.reg = function(user, callback) {
//	var UserModel = mongoose.model("users");
//	UserModel.create(user, function(err, data) {
//		callback(data);
//	})
//};
//
//module.exports.isUse = function(username, callback) {
//	var UserModel = mongoose.model("users");
//	UserModel.find({
//		username: username
//	}, function(err, data) {
//		callback(data);
//	})
//};
//
//module.exports.login = function(user, callback) {
//	var UserModel = mongoose.model("users");
//	UserModel.find(user, function(err, data) {
//		callback(data);
//	})
//}