/**
 * Created by Administrator on 2016-11-21.
 */
var movieDao = require("../dao/movieDao.js");
module.exports.getIndex=function(callback){
    movieDao.getIndex(function(data){
        callback(data);
    })
};
module.exports.getDetails=function(movieID,callback){
    movieDao.getDetails(movieID,function(data){
        callback(data);
    })
};






























//module.exports.getEmp = function(callback) {
//    EmpDao.getEmp(function(data) {
//        callback(data);
//    })
//};
//
//module.exports.getEmpByPage = function(page, callback) {
//    EmpDao.getEmpByPage(page, function(data) {
//        callback(data);
//    })
//};
