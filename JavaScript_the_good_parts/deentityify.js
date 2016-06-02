//寻找字符串中的HTML字符实体并替换为它们对应的字符
//理想方式是将其放入一个闭包
String.method("deentityify", function(){
	//字符实体表，映射关系
	var entity = {
		quot : '"',
		lt : '<',
		gt : '>'
	};
	//返回deentityify方法
	return function(){
		//这才是deentityify方法
		return this.replace(/&([^&;]+);/g, function(a, b){
			var r = entity[b];
			return typeof r === "string" ? r : a;
		});
	};
}());