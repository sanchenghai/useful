/***
setTimeout的原型是这样的：
iTimerID = window.setTimeout(vCode, iMilliSeconds [, sLanguage]){
	//.....代码
 return timer//返回一个标记符
}
   
setTimeout有两种形式
setTimeout(code,interval)
setTimeout(func,interval,args)
其中code是一个字符串,func是一个函数.
注意"函数"的意义,是一个表达式,而不是一个语句.
***/
function a(){
 console.log("a");
}
setTimeout("a()",1000);
setTimeout(a,1000);
/***
这里注意第二种形式中,是a,不要写成a(),
展开来说,不管你这里写的是什么,
如果是一个变量,一定是一个指向某函数的变量;
如果是个函数,那它的返回值就 要是个函数
***/



//传递参数，利用闭包比较好
function show(name){
	console.log("Hello World:" + name);
}
  
function _show(name){
	return function(){
		show(name);
	};
}
setTimeout(_show(name),1000);

 /***
 如果都是字符串形式的参数，
 如：function test(param){} ，
 可使用字符串拼接传递参数
 setTimeout("test('" + myParam + "')",1000)
 ***/