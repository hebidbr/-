define(['text!conpoent/share/share.html'],function(content){
    function res(){
        $('#wrap').html(content);
    }
    return{
        res:res
    }
})