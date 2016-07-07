/***
  请编写一个通用的事件注册函数（请看下面的代码）。
  function addEvent(element, type, handler)
  {
      // 在此输入你的代码，实现预定功能
  }
***/
function addEvent(element, type, handler){
    // 在此输入你的代码，实现预定功能
    if (element.addEventListener){
        element.addEventListener(type, handler, false);
    }else if (element.attachEvent){    //for IE
        element.attachEvnet("on" + type, handler);
    }else{
        element["on" + type] = handler;
    }
}