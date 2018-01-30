/**
 * Created by Administrator on 2016-11-21.
 */
var mongoose = require("mongoose");
var movieSchema = new mongoose.Schema({
    url: String,
    chinaName: String,
    englishName: String,
    type:String,
    time:String,
    playTime:String,
    introduce:String,
    directorPic:String,
    directorName:String,
    actorPicOne:String,
    actorOne:String,
    actorPicTwo:String,
    actorTwo:String,
    actorPicThree:String,
    actorThree:String,
    actorPicFour:String,
    actorFour:String,
    seat:Array

});
mongoose.model("movie", movieSchema, "movie");
