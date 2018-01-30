/**
 * Created by Administrator on 2016-11-22.
 */
var movieDao = require("../dao/seatDao.js");
var seatDao = require('../dao/seatDao.js');
module.exports.getSeat=function(mId,callback){
    movieDao.getSeat(mId,function(data){
            callback(data);
    })
};

module.exports.seatMovie=function(mId,callback){
    movieDao.seatMovie(mId,function(data){
        callback(data);
    })
};

module.exports.upDate=function(data,callback){
    //console.log(arr._id[0]);
    seatDao.upDate(data,function(data){
        callback(data);
    });
};