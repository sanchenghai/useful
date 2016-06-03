//用正则表达式字面量创建的RegExp对象来共享同一个单实例
var regexp = new RegExp(/a/gi);
function make_a_matcher () {
	return regexp;
}

var x = make_a_matcher();
var y = make_a_matcher();

//当心：x和y是相同的对象
x.lastIndex = 10;
console.log(y);
console.log(y.lastIndex);