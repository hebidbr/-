define(['text!conpoent/me/me.html'],function(content){
    function res(){
        $('#wrap').html(content);
    }
    return{
        res:res
    }
})