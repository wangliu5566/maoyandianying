var mongoose = require("mongoose");
module.exports.getEmp = function(callback) {
	var EmpModel = mongoose.model("emp");
	EmpModel.find(function(err, data) {
		callback(data)
	})
};

module.exports.getEmpByPage = function(page, callback) {
	var EmpModel = mongoose.model("emp");
	EmpModel.count(function(err, data) {
		page.count = data;
		page.maxPage = Math.ceil(page.count / page.eachPage);
		EmpModel
			.find()
			.sort({
				_id: 1
			})
			.skip((page.curPage - 1) * page.eachPage)
			.limit(page.eachPage)
			.exec(function(err, data) {
				page.data = data;
				callback(page)
			})

	})
};