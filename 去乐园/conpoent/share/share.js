define(['text!conpoent/share/share.html','css!conpoent/share/share.css'],function(content){
    function res(){
        $('#wrap').html(content);
    }
    return{
        res:res
    }
})