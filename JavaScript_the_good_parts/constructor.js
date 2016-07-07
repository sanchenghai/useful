//函数化构造器的伪代码
//该函数包括四个步骤：创建新对象，选择性地定义私有实例变量和方法，扩充方法，返回新对象
/***
var constructor = function(spec, my){
	var that,                   //其他的私有实例变量
		my = my || {};

	把共享的变量和函数添加到my中

	that = 一个新对象;

	添加给that的特权方法

	return that;
}
***/



var mammal = function(spec){
	var that = {};
	that.get_name = function(){
		return spec.name;
	};
	that.says = function(){
		return spec.saying || "";
	};
	return that;
};
var myMammal = mammal({name : "Herb"});