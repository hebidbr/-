define(['text!conpoent/happy/happy.html'],function(content){
    function res(){
        $('#wrap').html(content);
    }
    return{
        res:res
    }
})