//构造一个将很多个值相加的函数
//函数内部定义的变量sum不会与函数外部定义的sum产生冲突
//该函数只会看到内部的那个变量
var sum = function(){
	var i,sum = 0;
	for(i = 0;i<arguments.length;i += 1){
		sum += arguments[i];
	}
	return sum;
};

document.writeln(sum(4,8,15,16,23,42)); //108