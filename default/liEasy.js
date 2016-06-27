$(function(){
    var lis = document.getElementsByTagName('li');
    var i;
	for (i = 0; i < lis.length; i += 1) {
		alert(i);//先执行
		lis[i].onclick = function() {
            alert(i);//代码已经走过一遍，只是不输出而已，所以全报个数
        };
        alert(i);//后执行
	}
});



$(function(){
    //注意兼容等
    $("ul").click(function(e){
        var a = e.target.textContent;
        alert(a);
    });
    //jQ的强大
    $("ul").on('click','li',function(){
        alert($(this).text());
    });
});