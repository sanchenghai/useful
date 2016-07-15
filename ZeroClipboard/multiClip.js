//使用的是ZeroClipboard的示例
function goClip(){
    var clipButton = $(".wqClipButton");
    console.log(clipButton.length);
    var i ,clipi = [];
    ZeroClipboard.setMoviePath('__PUBLIC__/newCommon/assets/ZeroClipboard/ZeroClipboard.swf');
    for(i = 0; i < clipButton.length; i += 1){
        console.log(clipButton.eq(i).val());
        clipi[i] = new ZeroClipboard.Client();
        console.log(222);
        clipi[i].setHandCursor( true );
        clipi[i].setText(clipButton.eq(i).val());
        console.log(333);
        clipi[i].addEventListener( "mouseUp", function(client) {
            alert("复制成功！");
        });
        console.log(444);
        clipi[i].glue(clipButton.eq(i)[0]);
        console.log(555);
    }
}