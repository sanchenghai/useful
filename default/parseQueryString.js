/***
  请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象，如：
  var url = “http://www.taobao.com/index.php?key0=0&key1=1&key2=2.....”
  var obj = parseQueryString(url);
  alert(obj.key0)  // 输出0
***/
//自己写的，没有用到正则，主要是不会
function parseQueryString(name){
  var query = name.split("?");
  // console.log(query);
  if(query.length != 2){
    return {"queryNumError" : query.length - 1};
  }
  query = query[1].split("&");
  // console.log(query);
  var res = {};
  for(var i = 0; i < query.length; i++){
    res[query[i].split("=")[0]] = query[i].split("=")[1];
  }
  return res;
}

var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2";
var obj = parseQueryString(url);
console.log(obj.key0);  // 输出0
console.log(obj);