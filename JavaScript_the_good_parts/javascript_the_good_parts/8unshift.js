//unshift可以这样实现
Array.method('unshift',function(){
	this.splice.apply(this,[0,0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});