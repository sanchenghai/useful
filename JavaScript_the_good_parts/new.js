//当一个函数对象被创建时，Function构造器产生的函数对象会运行类似这样的一些代码：
this.prototype = {constructor : this};



//若new运算符是一个方法而不是一个运算符，它可能会执行：
Function.method("new", function(){
	//创建新对象，继承自构造器函数的原型对象
	var that = Object.beget(this.prototype);
	//调用构造器函数，绑定this到新对象
	var other = this.apply(that, arguments);
	//如果返回值不是一个对象，则返回该新对象
	return (typeof other === "object" && other) || that;
});