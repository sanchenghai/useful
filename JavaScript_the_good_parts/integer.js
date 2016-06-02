//提取数字中的整数部分
//需要method方法
Number.method("integer", function(){
	return Math[this < 0 ? "ceiling" : "floor"](this);
});
console.log((-10/3).integer());    //-3