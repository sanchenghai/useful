/***
JavaScript 中定义或实例化任何一个对象的时候，
它都会被附加一个名为 __proto__ 的隐藏属性，
原型链正是依靠这个属性才得以形成,不是基于函数对象的属性prototype.
但是千万别直接访问 __proto__ 属性，因为有些浏览器并不支持直接访问它。
另外 __proto__ 和 对象的 prototype 属性也不是一回事，它们各自有各自的用途。
***/
var a = {
		"name" : "wq",
		"age" : "27",
		"ability" : function(){
			console.log("eat");
		}
	};
console.log(a);    //a对象
console.log(a.__proto__);    //Object空对象
console.log(a.__proto__.__proto__);    //null