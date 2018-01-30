/**
 * Created by Administrator on 2016/11/17.
 */
define(function(require, exports) {
    var $ = require("$");
    exports.load=function(){
        $('#app').load('./login/login.html',function(){
            $('.header').hide();
            $('.footer').hide();

            $('#regBtn').on('click',function(){
                require('router').go('#/reg');
            });
            $(".lBtnOne").val(location.hash.toString().slice(location.hash.toString().lastIndexOf('/')+1));
            $('#loginBtn').on('click',function(){
                $.ajax({
                    type:'post',
                    url:'/users/login',
                    data:$('#loginForm').serialize(),
                    success:function(data){
                        if(eval(data)){
                            console.log('true');
                            require('router').go('#/buy');
                        }
                    }
                });
            })
        })
    }
});