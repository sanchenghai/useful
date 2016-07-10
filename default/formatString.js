//trim的升级版，加上单词间只能有一个空格
function formatString(sourceString) {
    var arr = sourceString.split(/\s+/);
    var str = "";
    for(var i = 0;i<arr.length;i++){
      if(arr[i]){
        str += arr[i] + " ";
      }
    }
    return str.replace(/^\s+|\s+$/g, "");
}
formatString("     i    love meituan");