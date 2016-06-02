//继承，隐藏了细节   P48
Function.method("inherits", function(Parent){
	this.prototype = new Parent();
	return this;
});