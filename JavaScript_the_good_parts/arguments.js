//通过arguments函数可以访问所有它被调用时传递给它的参数列表，包括多余的实参
//构造一个将很多个值相加的函数
//注意该函数内部定义的变量sum不会与函数外部定义的sum产生冲突
var sum =function(){
	var i, sum = 0;
	for(i = 0; i < arguments.length; i += 1){
		sum += arguments[i];
	}
	return sum;
};
console.log(sum(4, 8, 15, 16, 23, 42));    //108
//arguments并不是一个真正的数组，而是一个类似数组的对象，拥有length属性，但是缺少所有的数组方法