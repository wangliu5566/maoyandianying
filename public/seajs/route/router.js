/**
 * Created by Administrator on 2016/11/17.
 */
define(function(require, exports) {
    var $=require('$');


    $(window).on("popstate", function(event) {
        var state = event.originalEvent.state;
        state = state || location.hash;
        load(state);
    });

    function load(path){
        if(path.indexOf('deal')!==-1){
            $.ajax({
                type:'post',
                url:'/users/isLogin',
                async:false,
                success:function(msg){
                    if(!(eval(msg))){
                        path='#/login';
                        history.pushState(path,null,path);
                    }
                }
            });
            //if (document.cookie.indexOf("username") === -1) {
            //    path = "#/login";
            //    history.pushState(path, null, path);
            //}
        }else if(location.hash.indexOf('#/login/')!==-1){
            $('input[name=username]').val( location.hash.slice(location.hash.lastIndexOf("/") + 1));
            username = location.hash.slice(location.hash.lastIndexOf("/") + 1);
            path = "#/login";
            username="#/login"
        }



        if(path.indexOf("#/details/")!==-1) {
            path = "#/details";
        }

        if(path.indexOf("#/buy/")!==-1){
            path="#/buy";
        }
        if(path.indexOf("#/deal/")!==-1){
            path="#/deal";
        }


        //if(path.indexOf('#/deal/')!==-1){
        //    console.log("deal1")
        //    path='#/deal/';
        //}
        switch (path){
            case "#/container":
                return require("container").load();
            case "#/details":
                return require("details").load();
            case "#/buy":
                return require("buy").load();
            case "#/login":
                return require("login").load();
            case "#/reg":
                return require("reg").load();
            case "#/deal":
                //return console.log("deal")
                return require("deal").load();
            default:
                return require("container").load();
        }
    }

    exports.go = function(path) {
        path = path || "#/container";
        if(path!="#/container"){
            require('container').clearTimer();
        }

        history.pushState(path, null, path);
        load(path)
    }
});