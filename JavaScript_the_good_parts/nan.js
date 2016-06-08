//NaN
typeof NaN === "number";    //true

NaN === NaN    //false

NaN !== NaN    //true

//isNaN函数可以辨别数字与NaN

//判断一个值是否是数字的最佳方法是isFinite函数，但它会将结果转换为数字

//isNumber
function isNumber(value){
	return typeof value === "number" && isFinite(value);
}