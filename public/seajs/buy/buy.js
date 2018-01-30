/**
 * Created by Administrator on 2016/11/17.
 */
define(function(require, exports) {
    var $ = require("$");
    //渲染座位信息
    function renderSeat(data){
        $('.bSelectList').html(data.seat.map(function(item,index){
            return `
             <li _id='${item._id}' seatName='${item.seatName}' state='${item.state}' class="${item.state==0?"able":"disable"}"></li>
            `
        }).join('')).on('click','li',function(){
            if($(this).attr('state')==0){
                if($('#maxSeat span').size()<4){
                    $(this).attr({
                        class:"choose",
                        state:1
                    });
                    setSpan();
                }
            }else if($(this).attr('state')==1){
                $(this).attr({
                    class:"able",
                    state:0
                });
                setSpan();
            }
        })
    }
    //显示选中的座位并添加到座位列表
    function setSpan(){
        var str="";
        $('.choose').each(function(index,item){
            str+=`
            <span style="border:1px solid gray;width: 74px;height: 24px;" _id="${$(item).attr('_id')}" seatName="${$(item).attr('seatName')}">${$(item).attr("seatName")}</span>
            `
        });
        $('#maxSeat').html(str);
        //选中座位的总价
        $('.totalPrice').html($('.price').text()*$('#maxSeat span').size());
    }

    function renderMovie(data){
        $('.bList').html(
            `
            <li class="bItem fl"><b>电影团购</b><span>》</span></li>
            <li class="bItem fl"><b>339影城</b><span>》</span></li>
            <li id="bName" class="bItem fl">${data.chinaName}<span>》</span></li>
            <li class="bItem fl bActive"><b>在线选座</b><span>》</span></li>
            `
        );
        $('.bDingOne').html(
             `
            <div class="bDingOne">
                    <div class="bDingOneL fl">${data.url}</div>
                    <div class="bDingOneR fl">
                       <h3>${data.chinaName}</h3>
                        <div class="bDingOneLeft">
                            <p><span>类型</span>${data.type}</p>
                            <p><span>时长</span>${data.time}</p>
                        </div>
                    </div>
                </div>
            `
        );
    }
    function seatMovie(mId){
        $.ajax({
            type:'post',
            url:'/seat/seatMovie',
            data:{_id:mId},
            success:function(data){
                console.log(data);
                renderSeat(data);
                renderMovie(data);
            }
        })
    }
    function upDate(arr){
        $.ajax({
            type:'post',
            url:'/seat/upDate',
            data:{
                arr:JSON.stringify(arr),
                movieId:mId
            },
            success:function(data){
                if(eval(data)){
                    console.log('订单成功');
                    console.log(data);
                    //require('router').go('#/deal/${mId}');
                }else{
                    //console.log('订单失败')
                }
            }
        });
    }
    var mId=location.hash.slice(location.hash.lastIndexOf("/")+1);

    exports.load=function(){
        $('#app').load('./buy/buy.html',function(){
            $('#buyBtn').on('click',function(){
                console.log('#/deal/'+mId)
                require('router').go('#/deal/'+mId);
                var arr=[];
                $('#maxSeat span').each(function(index,item){
                    arr.push({
                        seatId:$(item).attr('_id'),
                        seatName:$(item).attr('seatName')
                    });
                    //console.log(arr);
                });
                upDate(arr);
            });
            //获取座位信息

            seatMovie(mId);
            $('#login').on('click',function(){
                require('router').go('#/login')
            })
        })
    }
});
