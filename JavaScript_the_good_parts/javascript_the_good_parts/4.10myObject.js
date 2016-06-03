//通过调用一个函数的形式去初始化myObject
//该函数返回一个对象字面量，函数的作用域
//使得它的变量对其他程序来说是不可见的
var myObject = function(){
	var value = 0;
	return {
		increment:function(inc){
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue:function(){
			return value;
		}
	}
}();