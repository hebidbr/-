define(['text!conpoent/happy/happy.html','css!conpoent/happy/happy.css'],function(content){
    function res(){
        $('#wrap').html(content);
        $('#top li').on('click',function(){
            $('#top li').css({
                borderBottom:'none'
            })
            $(this).css({
                 borderBottom:'4px solid orange'
            })
        })
    }
    function create(){
        $.ajax({
            type:'get',
            url:'http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城',
            async:true,
            success:function(res){
                creates(res);
            }
        })
        function creates(arr){
            var arr1 = JSON.parse(arr);
            var arrObj = {list:arr1.data};
            var html1 = baidu.template('model1',arrObj);
            $('#list2').html(html1);
        }
    } 
    return{
        res:res,
        create:create
    }
})