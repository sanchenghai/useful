//创建一个名为quo的构造函数
//他构造出带有get_status方法和status私有属性的一个对象
var quo = function(status){
	return {
		get_status:function(){
			return status;
		}
	};
};

//构造一个quo实例
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

//这个quo函数被设计成无须再前面加上new来使用，所以名字也没有首字母大写