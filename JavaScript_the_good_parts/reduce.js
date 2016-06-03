//给array增加一个方法，允许对数组进行计算
Array.method("reduce", function(f, value){
	var i;
	for(i = 0; i < this.length; i += 1){
		value = f(this[i], value);
	}
	return value;
});

//创建一个数组
var data = [4, 8, 15, 16, 23, 42];

//定义两个简单的函数：加和乘
var add = function(a, b){
	return a + b;
};
var mult = function(a, b){
	return a * b;
};

//调用reduce方法，传入add函数和muli函数
var sum = data.reduce(add, 0);
var product = data.reduce(mult, 1);

data.total = function(){
	return this.reduce(add, 0);
};
total = data.total();