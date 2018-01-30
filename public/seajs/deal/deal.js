/**
 * Created by Administrator on 2016/11/17.
 */
define(function(require, exports) {
    var $ = require("$");
    exports.load=function(){
        $('#app').load('./deal/deal.html',function(){
            $('#pay').on('click',function(){
            })
        })
    }
});