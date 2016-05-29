//用一个method方法去定义新方法
Function.prototype.method = function(name, func){
	this.prototype[name] = func;
	return this;
};