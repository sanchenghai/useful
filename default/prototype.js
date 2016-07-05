/***
当我们创建 a 函数时，同时也给它定义了一个 __proto__ 属性，并赋值为 Function.prototype，
实际上是创建了一个 Function 类型的对象,Function 是 JavaScript 中预定义的一个对象。
当实例化一个对象的时候，对象的 __proto__ 属性会被赋值为其构造者的原型对象，
此处的实例化是指定义函数时实例化Function，不是手动new实例化对象，也就是 Function，
此时构造器回去计算参数的个数，改变 length 的值。
***/
var a = function(){
	console.log("sleep");
};

console.log(a);    //a函数
console.log(a.prototype);    //a空对象
console.log(a.prototype.prototype);    //undefined