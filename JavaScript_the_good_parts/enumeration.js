//for in语句可用来遍历一个对象中的所有属性名，有必要过滤掉那些你不想要的值
//最为常见的过滤器是hasOwnProperty方法，以及使用typeof来排除函数
var name;
for(name in another_stooge){
	if(typeof another_stooge[name] !== "function"){
		document.writeln(name + " : " + another_stooge[name]);
	}
}    //没看到hasOwnProperty


//属性名出现的顺序是不确定的。如果想要确保属性以特定的顺序出现，
//最好的办法就是完全避免使用for in语句，而是创建一个数组
var i;
var properties = [
	"first-name",
	"middle-name",
	"last-name",
	"profession"
];
for(i = 0; i < properties.length; i += 1){
	document.writeln(properties[i] + " : " + another_stooge[properties[i]]);
}