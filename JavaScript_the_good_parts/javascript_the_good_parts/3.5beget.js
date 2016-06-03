//beget方法创建一个使用原对象作为其原型的新对象
if(typeof Object.beget !== 'function'){
	Object.beget = function(o){
		var F = function(){};
		F.prototype = o;
		return new F();
	}
};

//示例
var another_stooge = Object.beget(stooge);
