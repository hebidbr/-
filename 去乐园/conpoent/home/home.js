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
            var arr1 = arr.slider;
            var arr2 = arr.arealist;
            var arr3 = arr.reclist; 
            var arr1Obj = {list:arr1};
            var html1 = baidu.template('model1',arr1Obj);
            $('#swiper').html(html1);

            // 轮播图设置
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                effect : 'overflow',
            }); 


            var arr2Obj = {list:arr2};
            var html2 = baidu.template('model2',arr2Obj);
            $('#nav2').html(html2);


            var arr3Obj = {list:arr3};
            var html3 = baidu.template('model3',arr3Obj);
            $('#list').html(html3);
       }
    }
    return{
        res:res,
        create:create
    }
})