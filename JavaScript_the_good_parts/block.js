//解析作用域  P51
var block = function(){
	//记住当前的作用域。构造一个包含了当前作用域中所有对象的新作用域
	var oldScope = scope;
	scope = Object.beget(scope);

	//传递左花括号调用advance
	advance("{");

	//使用新的作用域进行解析
	parse(scope);

	//传递右花括号调用advance并抛弃新作用域，恢复老作用域
	advance("}");
	scope = oldScope;
};