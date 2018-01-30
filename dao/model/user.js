var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
	username: String,
	password: String
});
mongoose.model("users", UserSchema, "users")