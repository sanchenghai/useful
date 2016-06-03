//chatAt可以这样实现
String.method('chatAt',function(pos){
	return this.slice(pos,1);
});