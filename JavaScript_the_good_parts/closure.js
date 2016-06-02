//闭包
var myObject = function(){
	var value = 0;
	return {
		increment : function(inc){
			value += typeof inc === "number" ? inc : 1;
		},
		getValue : function(){
			return value;
		}
	};
}();



//创建一个名为quo的构造函数
//它构造出带有get_status方法和status私有属性的一个对象
var quo = function(status){
	return {
		get_status : function(){
			return status;
		}
	};
};
var myQuo = quo("amazed");
console.log(myQuo.get_status());