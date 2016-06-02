//Fibonacci数列
var fibonacci = function (n) {
	return n < 2 ? n : fibonacci (n - 1) + fibonacci (n - 2);
};
console.log(fibonacci(10));
//做了很多无谓的工作



//具备记忆功能，减少工作量
var fibonacci = function(){
	var memo = [0, 1];
	var fib = function(n){
		var result = memo[n];
		if(typeof result !== "number"){
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();
console.log(fibonacci(10));