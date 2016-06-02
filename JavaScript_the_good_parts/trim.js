//移除字符串末端空白
String.method("trim", function(){
	return this.replace(/^\s+|\s+$/g, "");
});
console.log('"' + "   neat    ".trim() + '"');