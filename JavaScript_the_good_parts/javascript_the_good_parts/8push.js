//push可以这样实现
Array.method('push',function(){
	this.splice.apply(this,[this.length,0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});