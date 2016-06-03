//简单值数组排序
var m = ['aa','bb','a',4,6,15,16,23,42];

m.sort(function(a,b){
	if(a === b){
		return 0;
	}
	if(typeof a === typeof b){
		return a < b ? -1 : 1;
	}
	return typeof a < typeof b ? -1 : 1;
});

console.log(m);



//by函数接受一个成员名字符串和一个可选的次要比较函数作为参数
//并返回一个可以用来对包含该成员的对象数组进行排序的比较函数
//当o[name]和p[name]相等时，次要比较函数被用来决出高下
var by = function(name,minor){
	return function(o,p){
		var a,b;
		if(o && p && typeof o === 'object' && typeof p === 'object'){
			a = o[name];
			b = p[name];
			if( a === b){
				return typeof minor === 'function' ? minor(o,p) : 0;
			}
			if(typeof a === typeof b){
				return a < b ? -1 : 1;
			}
			return typeof a < typeof ？ -1 : 1;
		}else{
			throw{
				name:'Error',
				message:'Expected an object when sorting by ' + name;
			};
		}
	};
};