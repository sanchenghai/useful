var a = function(){
	console.log("sleep");
};

console.log(a);    //a函数
console.log(a.prototype);    //a空对象
console.log(a.prototype.prototype);    //undefined