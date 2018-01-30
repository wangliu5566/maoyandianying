/**
 * Created by Administrator on 2016-11-22.
 */
var mongoose = require("mongoose");
var seatSchema = new mongoose.Schema({
    colId: String,
    rowId: String,
    seatName:String,
    movieId: String,
    state:String
});
mongoose.model("seat", seatSchema, "seat");
