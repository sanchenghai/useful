//递归计算Fibonacci数列
var fibonacci = function(n){
	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

for(var i = 0;i <= 10;i += 1){
	document.writeln('// ' + i + ': ' + fibonacci(i));
}