//匹配数字的正则表达式，包括整数、小数、符号、指数
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var test_number = function (num) {
	console.log(parse_number.test(num));
};

test_number("1");
test_number("number");
test_number("98.6");
test_number("132.21.86.100");
test_number("123.45E-67");
test_number("123.45D-67");

//结果：TFTFTF