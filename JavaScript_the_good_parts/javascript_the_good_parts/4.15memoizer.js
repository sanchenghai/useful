//记忆形式一般化，编写一个函数帮助构造带记忆功能的函数
var memoizer = function(memo,fundamental){
	var shell = function(n){
		var result =memo[n];
		if(typeof result !== 'number'){
			result = fundamental(shell,n);
			memo[n] = result;
		}
		return result;
	};
	return shell;
};


//fibonacci
var fibonacci = memoizer([0,1],function(shell,n){
	return shell(n - 1) + shell(n - 2);
});


//factorial
var factorial = memoizer([1,1],function(shell,n){
	return n * shell(n - 1);
})



console.log(fibonacci(5));
console.log(factorial(5));