document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
    document.documentElement.style.fontSize = innerWidth/16 + 'px';
}
require.config({
    paths:{
        jquery:'js/jquery-1.12.3',
        underscore:'js/underscore',
        backbone:'js/backbone',
        text:'js/text',
        luyou:'luyou',
        css:'js/css',
        swiper:'js/swiper-3.3.1.jquery.min',
        baiduTemplates:'js/baiduTemplate'
    }
})
require(['jquery','luyou','baiduTemplates'],function(res){
    console.log(baidu.template);
})