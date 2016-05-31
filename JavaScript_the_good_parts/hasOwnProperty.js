//for循环的一种形式，for in 语句，会枚举对象的所有属性名
//需检测来确定这个属性名就是该对象的成员，还是从其原型链里找到的
for(myvar in obj){
	if(obj.hasOwnProperty(myvar)){
		//
	}
};