$(function(){
    var i = 0;
    $("button").click(function(){
        i += 1;
        var newli = "<li>" + i + "</li>";
        $("ul").append(newli);
    });

    $("li").click(function(){
        alert($(this).text());  //对于动态增加的li是无效的
    });

    $("ul").on('click','li',function(){
        alert($(this).text());
    });

});