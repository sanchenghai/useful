//构建一个带尾递归的函数
//阶乘
var factorial = function factorial(i, a){
	a = a || 1;
	if(i < 2){
		return a;
	}
	return factorial(i -1, a * i);
};
console.log(factorial(4));    //24