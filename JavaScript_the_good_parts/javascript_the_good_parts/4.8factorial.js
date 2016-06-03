//构建一个带尾递归的函数
//功能是求阶乘
var factorial = function factorial(i,a){
	a = a || 1;
	if(i<2){
		return 2;
	}
	return factorial(i - 1,a * i);
};

document.writeln(factorial(4)); //24