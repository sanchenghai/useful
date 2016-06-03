//比较难理解
Function.method('bind',function(that){
	//返回一个函数，调用这个函数就像他是那个对象的方法一样
	var method = this,
	    slice = Array.prototype.slice,
	    args = slice.apply(arguments,[1]);
	    // console.log(method); //return this.value;
	    // console.log(slice);
	    // console.log(args); //[]
	    // console.log(slice.apply(arguments,[0])); //[Object]
	return function(){
		return method.apply(that,args.concat(slice.apply(arguments,[0])));
	};
});

var x = function(){
	return this.value;
}.bind({value:666});
console.log(x);
console.log(x()); //666