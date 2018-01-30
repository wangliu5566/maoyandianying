/**
 * Created by Administrator on 2016-11-22.
 */
var mongoose = require("mongoose");
module.exports.getSeat=function(mId,callback){
    var seatModel=mongoose.model('seat');
    seatModel.find(mId,function(err,data){
            //console.log(data);
            callback(data);
    })
};


module.exports.seatMovie=function(mId,callback){
    var seatModel=mongoose.model('seat');
    var movieModel=mongoose.model('movie');
    //var dealModel=mongoose.model('deal');
    var movie;

    movieModel.findOne(mId,function(err,data){
        console.log(data);
        movie=data;
        seatModel.find({
            movieId:mId._id
        },function(err,data){
            movie.seat=data;
            callback(movie);
        });
    })
};
module.exports.upDate=function(data,callback){
    //console.log(arr._id[0]);
    console.log(data);
    var seatModel=mongoose.model('seat');
    var dealModel=mongoose.model('deal');
    var seatNames=[];
    var deal={
        movieId:data.movieId,
        userId:data.userId,
        seatName:String,
        seats:String
    };
    data.arr.forEach(function(item,index){
        seatNames.push(item.seatName);
        seatModel.upDate({
            _id:item.seatId
        },{
            $set:{
                state:1
            }
        },function(err,data){
            //console.log(data);
            if(index===data.arr.length-1){
                mModel.findOne({
                    _id:data.movieId
                },function(err,data){
                    deal.movieName=data.mName;
                    deal.seats=JSON.stringify(seatNames);
                    dealModel.create(deal,function(err,data){
                        callback(data)
                    });
                });
                //console.log(true)
            }
        })
    });


    //for(var i=0;i<arr._id.length;i++){
    //    ~~function(i){
    //        seatModel.update({_id:arr._id[i]},{$set:{state:'1'}},function(err,data){
    //            if(arr._id.length-1){
    //                callback(data)
    //            }
    //        });
    //    }(i)
    //}
};