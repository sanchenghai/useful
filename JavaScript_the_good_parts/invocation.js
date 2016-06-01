//函数调用时，传递控制权和参数给新函数
//每个函数接收两个附加参数：this和arguments
//this的值取决于调用的模式
//四种调用模式：方法调用模式、函数调用模式、构造器调用模式和apply调用模式

//每个参数值被赋予函数声明时定义的形式参数名
//当实际参数（arguments）的个数与形式参数（parameters）的个数不匹配时不会导致运行时错误
//实际参数值过多，超出的参数值将被忽略
//实际参数值过少，确实的值将会被替换为undefined



//方法调用模式
//当一个函数被保存为对象的一个属性时，称为一个方法，this被绑定到该对象
//创建myObject，有value属性和increment方法，该方法接受可选参数，如参数不是数字，默认使用数字1
var myObject = {
	value : 0,
	increment : function(inc){
		this.value += typeof inc === "number" ? inc : 1;
	}
};
myObject.increment();
document.writeln(myObject.value);    // 1
myObject.increment(2);
document.writeln(myObject.value);    // 3

//函数调用模式
//当一个函数并非一个对象的属性时，它被当做函数来调用，this被绑定到全局对象。作者认为这是一个错误
//后果是方法不能利用内部函数来帮助它工作，因为不能共享该方法对对象的访问权
//解决方案：定义一个变量并给它赋值为this，内部函数就可以通过那个变量访问到this，一般命名为that
//给myObject增加一个double方法
myObject.double = function(){
	var that = this;
	var helper = function(){
		that.value = add(that.value, that.value);
	};
	helper();
};
myObject.double();
document.writeln(myObject.value);    //6

//构造器调用模式
//如果在一个函数前面带上new来调用，将创建一个隐藏连接到该函数的prototype成员的新对象，this被绑定到那个新对象上
//new前缀会改变return语句的行为，会return一个对象，否则return这个新对象
//创建一个Quo构造器函数，带有status属性
var Quo = function(string){
	this.status = string;
};
//给Quo的所有实例提供一个名为get_status的公共方法
Quo.prototype.get_status = function(){
	return this.status;
};
//构造一个Quo实例
var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());    //confused

//apply调用模式
//apply方法构建一个参数数组并用其去调用函数，允许选择this值
//apply接收两个参数，第一个将被绑定给this的值，第二个就是参数数组
//构造一个包含两个数字的数组，并将他们相加
var array = [3, 4];
var sum = add.apply(null, array);    //7
//构造一个包含status成员的对象
var statusObject = {
	status : "A-OK"
};
//statusObject并没有继承自Quo.prototype，但可以在statusObject上调用get_status方法
var status = Quo.prototype.get_status.apply(statusObject);    //A-OK