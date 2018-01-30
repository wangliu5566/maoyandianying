var mongoose = require("mongoose");
var EmpSchema = new mongoose.Schema({
	empName: String,
	sal: String,
	job: String
});
mongoose.model("emp", EmpSchema, "emp");