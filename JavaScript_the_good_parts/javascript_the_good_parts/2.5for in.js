//循环对象，通常需要object.hasOwnProperty(variable)来确定这个属性就是
//该对象的成员，而不是从原型里找到的。
for(myvar in obj){
	if(obj.hasOwnProperty(myvar)){
		...
	}
}



//3.7可以使用typeof排除函数
var name;
for(name in another_stooge){
	if(typeof another_stooge[name] !== 'function'){
		document.writeln(name + ': ' + another_stooge[name]);
	}
}