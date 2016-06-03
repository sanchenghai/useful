//shift可以这样实现
Array.method('shift',function(){
	return this.splice(0,1)[0];
});