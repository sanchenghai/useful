//函数也是值
//套用允许将函数与传递给他的参数相结合去产生一个新的函数
Function.method('curry',function(){
	var slice = Array.prototype.slice,
	      args = slice.apply(arguments),
	      that = this;
	return function(){
		return that.apply(null,args.concat(slice.apply(arguments)));
	};
});