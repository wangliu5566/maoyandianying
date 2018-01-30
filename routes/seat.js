/**
 * Created by Administrator on 2016-11-22.
 */
var express = require('express');
var router = express.Router();
// 连接数据库
var seatService = require('../service/seatService');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//router.post('/getSeat', function(req, res, next) {
//    seatService.getSeat({
//        movieId:req.body.Id
//    },function(data){
//        res.send(data);
//        console.log(data);
//    });
//});



router.post('/seatMovie', function(req, res, next) {
    seatService.seatMovie({
       _id:req.body._id
    },function(data){
        res.send(data);
        //console.log(data);
    });
});

router.post('/upDate',function(req,res,next){
    //console.log(req.body)
    console.log(req.session.userId);
    //if(req.session.userId){
        var data=req.body;
        data.arr=JSON.parse(data.arr);
        data.userId="5837bb320bac0c941300034f";
        //console.log(data)
    //}else{
    //    res.send('false');
    //}
    //var arr=JSON.parse(req.body._id);
    ////console.log(req.body._id);
    ////console.log('in')
    //seatService.upDate({
    //    _id:arr,
    //    movieId:mId
    //},function(data){
    //    res.send(data)
    //});
    ////console.log(arr)
});

module.exports = router;
