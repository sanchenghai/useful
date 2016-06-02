//处理父类方法的方法，它取得一个方法名并返回调用那个方法的函数  P54
Object.method("superior", function(name){
	var that = this,
	     method = that[name];

	return function(){
		return method.apply(that, arguments);
	};
});



var coolcat = function(spec){
	var that = cat(spec),
	     super_get_name = that.superior("get_name");

	that.get_name = function(n){
		return "like " + super_get_name() + " baby";
	};
	return that;
};
var myCoolCat = coolcat({name : "Bix"});
var name = myCoolCat.get_name();    //like meow Bix meow baby