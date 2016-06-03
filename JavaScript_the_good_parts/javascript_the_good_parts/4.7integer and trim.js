//通过给Function.prototype增加一个method方法，就不必键入prototype这个属性名
Function.prototype.method = function(name,func){
	if(!this.prototype[name]){
		this.prototype[name] = func;
	}	
	return this;
};


//有时候只提取数字中的整数部分是很必要的
//integer方法会根据数字的正负来判断是使用Math.ceil还是Math.floor
Number.method('integer',function(){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});
document.writeln((-10 / 3).integer()); //-3


//trim方法移除字符串末端空白
String.method('trim',function(){
	return this.replace(/^\s+|\s+$/g,'');
});
document.writeln('"' + "  neat  ".trim() + '"'); //经测试，是去掉首尾的空白