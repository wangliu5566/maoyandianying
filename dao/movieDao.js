/**
 * Created by Administrator on 2016-11-21.
 */
var mongoose = require("mongoose");
module.exports.getIndex=function(callback){
  var movieModel=mongoose.model('movie');
    movieModel.find(function(err,data){
        console.log(data);
        callback(data);
    })
};
module.exports.getDetails=function(movieID,callback){
    var movieModel=mongoose.model('movie');
    movieModel.find(movieID,function(err,data){
        callback(data);
    })
};






























//module.exports.getEmp = function(callback) {
//    var movieModel = mongoose.model("movie");
//    movieModel.find(function(err, data) {
//        callback(data)
//    })
//};
//
//module.exports.getEmpByPage = function(page, callback) {
//    var movieModel = mongoose.model("movie");
    //movieModel.count(function(err, data) {
    //    page.count = data;
    //    page.maxPage = Math.ceil(page.count / page.eachPage);
    //    EmpModel
    //        .find()
    //        .sort({
    //            _id: 1
    //        })
    //        .skip((page.curPage - 1) * page.eachPage)
    //        .limit(page.eachPage)
    //        .exec(function(err, data) {
    //            page.data = data;
    //            callback(page)
    //        })
    //
    //})
//};
