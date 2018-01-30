var EmpDao = require("../dao/EmpDao.js");
module.exports.getEmp = function(callback) {
	EmpDao.getEmp(function(data) {
		callback(data);
	})
}

module.exports.getEmpByPage = function(page, callback) {
	EmpDao.getEmpByPage(page, function(data) {
		callback(data);
	})
}