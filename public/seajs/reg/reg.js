/**
 * Created by Administrator on 2016/11/17.
 */
define(function(require, exports) {
    var $ = require("$");
    exports.load=function(){
        $('#app').load('./reg/reg.html',function(){
            $('.header').hide();
            $('.footer').hide();
            $('#regBtn').on('click',function(){
                console.log($('#regForm').serialize())
                $.ajax({
                    type:'post',
                    url:'/users/reg',
                    data:$('#regForm').serialize(),
                    success:function(data){
                        require('router').go(`#/login/${$("input[name=username]").val()}`);
                    }
                });
            });

            $('input[name=username]').on('blur',function(){
                $.ajax({
                    type:'post',
                    url:'/users/isUse',
                    data:'username='+$(this).val,
                    success:function(msg){
                        if(eval(msg)){
                            $('.rInfo').html('');
                            $('.rInfo').html('该用户名已经存在');
                            $('#regBtn').attr('disabled','disabled');
                        }else{
                            $('.rInfo').html('注册成功后，全美团通用');
                            $('#regBtn').removeAttr('disabled');
                        }
                    }
                })
            })

        })
    }
});