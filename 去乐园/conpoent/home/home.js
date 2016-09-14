define(['text!conpoent/home/home.html','css!conpoent/home/home.css'],function(content){
    function res(){
        $('#wrap').html(content);
    }
    function create(){
       $.ajax({
            type:'get',
            url:'http://duif.applinzi.com/leyuan/home_data.php',
            async:true,
            success:function(res){
                var obj = JSON.parse(res)
                create(obj)
            }
        }) 
       function create(arr){
            console.log(arr)
            var arr1 = arr.slider;
            var arr2 = arr.arealist;
            for(var i= 0; i < arr1.length; i++){
                var div = $('<div class="swiper-slide"><img src=""></div>');
                div.find('img').attr({
                    src:arr1[i].img
                })
                $('.swiper-wrapper').append(div);  
            }
            for(var i = 0; i < arr2.length; i++){
                
            }
            var mySwiper = new Swiper(".swiper-container",{  
                direction:"horizontal",/*横向滑动*/  
                loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/  
                pagination:".swiper-pagination",/*分页器*/  
                prevButton:".swiper-button-prev",/*前进按钮*/  
                nextButton:".swiper-button-next",/*后退按钮*/  
                autoplay:3000,/*每隔3秒自动播放*/  
                effect:"coverflow",/*轮播的效果：（1）fade:淡入淡出；（2）cube:立方体；（3）coverflow:立体照片*/  
                slidesPerView:1,/*网格分布：1为在容器区域出现一张图；2：在容器区域出现两张图；3：在容器区域出现三张图*/  
                centeredSlides:true,/*默认第一块居左，设置为true后则是居中显示*/  
                coverflow:{  
                   rotate:30,/*3d旋转角度设置为30度*/  
                   stretch:10,/*每个slide之间的拉伸值，值越大靠得越近*/  
                   depth:30,/*位置深度，值越大离Z轴越远，看起来越小*/  
                   modifier:2,  
                   slideshadows:true/*开启阴影*/  
               }  
            })  
       }
    }
    return{
        res:res,
        create:create
    }
})