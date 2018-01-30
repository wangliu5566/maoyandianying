require("./database.js");
var mongoose =require("mongoose");
var SeatSchema = new mongoose.Schema({
    rowId: String,
    colId: String,
    seatName: String,
    movieId: String,
    state: String
});


var MoviesSchema = new mongoose.Schema({
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
var movieModel = mongoose.model("movie", MoviesSchema, "movie");
var seatModel = mongoose.model("seat", SeatSchema, "seat");
//
//mongoose.model("movie").find(function(err, data) {
//    data.forEach(function(item, index) {
//        for(var i = 1; i <= 10; i++) {
//            for(var j = 1; j <= 10; j++) {
//                new seatModel({
//                    rowId: i,
//                    colId: j,
//                    seatName: i + "排" + j + "列",
//                    movieId: item._id,
//                    state: 0
//                }).save(function(err, data) {
//                        console.log(data)
//                    })
//            }
//        }
//    })
//});

 //5832a8408996719c8fd1dd5b

 //
 //seatModel.find({
 //         movieId: "5833c4eb1b9a9a832800a744"
 //}, function(err, data) {
 //        console.log(data.length)
 //});
