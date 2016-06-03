//判断是否是数组
var is_array = function(value){
	return value && typeof value === "object" && value.constructor === Array;
};



//上面的方法识别从不同的窗口或帧里构造的数组时会失败
var is_array = function(value){
	return value && typeof value === "object" && typeof value.length === "number" && typeof value.splice === "function" && !(value.propertyIsEnumerable("length"));
};