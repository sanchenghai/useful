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