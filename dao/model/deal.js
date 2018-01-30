/**
 * Created by Administrator on 2016-11-25.
 */
var mongoose = require("mongoose");
var dealSchema = new mongoose.Schema({
    seats: String,
    movieName:String,
    movieId: String,
    userId:String
});
mongoose.model("deal", dealSchema, "deal");