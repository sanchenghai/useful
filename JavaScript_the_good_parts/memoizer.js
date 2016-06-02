//编写一个函数来帮助构造带记忆功能的函数，返回shell函数
var memoizer = function(memo, fundamental){
	console.log("I am in");
	var shell = function(n){
		var result = memo[n];
		if(typeof result !== "number"){
			result = fundamental(shell, n);
			memo[n] = result;
		}
		return result;
	};
	console.log("I am out");
	return shell;
};



//fibonacci函数
var fibonacci = memoizer([0, 1], function(shell, n){
	console.log("go to shell");
	return shell(n - 1) + shell(n - 2);
});    //执行memoizer
fibonacci(10);    //执行fibonacci



//factorial函数,带记忆的阶乘函数
var factorial = memoizer([1, 1], function(shell, n){
	console.log("go to shell");
	return n * shell(n - 1);
});    //执行memoizer
factorial(10);    //执行factorial