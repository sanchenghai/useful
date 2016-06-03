//pop可以这样实现
Array.method('pop',function(){
	return this.splice(this.length - 1,1)[0];
});