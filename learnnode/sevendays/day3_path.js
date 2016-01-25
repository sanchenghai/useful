var path = require('path');
var cache = {};

function store(key, value) {
	cache[path.normalize(key)] = value;
}

store('foo/bar', 1);
store('foo//baz//abc/bar', 2);
console.log(cache);  // => { "foo/bar": 2 }
/***
标准化之后的路径里的斜杠在Windows系统下是\，而在Linux系统下是/。
如果想保证任何系统下都使用/作为路径分隔符的话，
需要用.replace(/\\/g, '/')再替换一下标准路径。
***/



path.join('foo/', 'baz/', '../bar'); // => "foo/bar"



path.extname('foo/bar.js'); // => ".js"