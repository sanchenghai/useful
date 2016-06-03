//如果在try代码块内抛出了一个异常，控制权就会跳转到它的catch从句
//一个try语句只会有一个将捕获所有异常的catch代码块
var add = function(a,b){
	if(typeof a !== 'number' || typeof b !== 'number'){
		throw{
			name:'TypeError',
			message:'add needs numbers'
		};
	}
	return a + b;
}

var try_it = function(){
	try{
		add("seven");
	}catch(e){
		document.writeln(e.name + ': ' + e.message);
	}
}
Try_It();