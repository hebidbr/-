define(['text!conpoent/me/me.html','css!conpoent/me/me.css'],function(content){
    function res(){
        $('#wrap').html(content);
    }
    return{
        res:res
    }
})