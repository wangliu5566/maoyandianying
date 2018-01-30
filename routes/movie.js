/**
 * Created by Administrator on 2016-11-21.
 */
var express = require('express');
var movieService = require("../service/movieService.js");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/getIndex',function(req,res,next){
    movieService.getIndex(function(data){
        if(eval(data)){
            res.cookie('_id',req.body._id,{
                maxAge:1000*60*60
            });
        }
        res.send(data);
    })
});
router.post('/getDetails',function(req,res,next){
    movieService.getDetails(
        { _id:req.body.id},
        function(data){
        res.send(data);
        console.log(data);
    })
});

router.post('/searchMovie',function(req,res,next){

});


module.exports = router;