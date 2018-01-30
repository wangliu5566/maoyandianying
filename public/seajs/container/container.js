/**
 * Created by Administrator on 2016/11/17.
 */
define(function(require, exports) {
    var $ = require("$");
    //轮播
    var timer;
    function render(data){
        $('#wrap img').attr('src',data.imgs[data.index]);
        $($('.circle li').removeClass('selected').get(data.index)).addClass('selected');
    }
    function run(data){
        timer=window.setInterval(function(){
            data.index++;
            if(data.index===data.imgs.length){
                data.index=0;
            }
            render(data);
            //console.log(1);
        },1000);
    }
    function clearTimer(){
        window.clearInterval(timer);
    }
//电影渲染数据
    function renderList(data) {
        //console.log(data);
        var str = data.map(function(item, index) {
            return `
                <li class="itemOne fl">${item.url}<span>购票</span></li>
            `;
        }).join("");
        $(".cList").html(str)
    }
//获取电影数据
    function getIndex(){
        $.ajax({
            type:'post',
            url:'/movie/getIndex',
            success:function(data){
                renderList(data);
                //点击图片进入详情
                $('.itemOne').on('click','img',function(){
                    var index=$(this).index('.itemOne img');
                    require('router').go(`#/details/${data[index]._id}`);
                    //console.log(${this.id});
                });
            }
        })
    }

    exports.clearTimer=clearTimer;

    exports.load=function(){
        $('#app').load('./container/container.html',function(){

            //轮播
            var data={
                    imgs:["/images/首页/1_02.png","/images/首页/1_12.png","/images/首页/2_02.png","/images/首页/3_02.png"],
                    index:0
                };
            run(data);

            $('.circle').on('mouseenter','li',function(){
                clearTimer();
                data.index=$(this).index();
                render(data);
            }).on('mouseleave','li',function(){
               run(data);
            });
//获取电影数据
            getIndex();
        });
    };
});
