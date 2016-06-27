//背景图片动态覆盖，利用background-size：cover
/***
容器宽度随着电脑屏幕变化，高度不限
背景图片铺满容器，容器充满屏幕，不留空白
***/
//需配合HTML、CSS，引入jQ
$(function(){
    var iniHeight = $("#start").height(); //387 447 448 449 450 451
    var h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
    if(iniHeight < h - 160){
        iniHeight = h - 160;
    }
    $("#start").css({"height":iniHeight, "background-position":"0 0"});
    setImg();
    $(window).resize(function(){
        var iniWidth = $("#start").width();
        if(iniWidth > 770){
            iniHeight = 387;
        }else{
            iniHeight = 447;
        }
        h = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
        if(iniHeight < h - 160){
            iniHeight = h - 160;
        }
        $("#start").css({"height":iniHeight, "background-position":"0 0"});
        setImg();
    });
});

function setImg(){
    var width = $("#start").width();
    var height = $("#start").height();
    var imgConst = 1920 / 1080;
    // console.log("width = "+width+", height = "+height);
    if(width / height >= imgConst){
        // console.log("set height");
        $("#start").css({"height":width / imgConst});
        // console.log("set height = " + width / imgConst);
    }else if(width / height < imgConst){
        // console.log("set width");
        $("#start").css({"background-position":height * imgConst / -4 + "px 0"});
        // console.log("set width = " + height * imgConst / -4);
    }
}