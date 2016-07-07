//显示textarea的行数，回车换行，自动换行不算
function showNum(){
  var text = $(".textarea").eq(0).val();
  if(text == ""){
    $("#textCDKNum").text(0);
    return;
  }
  var length = text.split(/\r?\n/g).length;
  $("#textCDKNum").text(length);
}