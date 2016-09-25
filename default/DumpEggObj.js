function HumanCloning(){
}
 
HumanCloning.prototype ={
    name:'笨蛋的座右铭'
}
 
var clone01 = new HumanCloning();
alert(clone01.name);//'笨蛋的座右铭'
alert(clone01 instanceof HumanCloning);//true
 
HumanCloning.prototype = {};
 
alert(clone01.name);//'笨蛋的座右铭'
alert(clone01 instanceof HumanCloning);//false
 
var clone02 = new HumanCloning();
alert(clone02.name);//undefined
alert(clone02 instanceof HumanCloning);//true



//__proto__指向的对象有可能是function类型的函数对象，如函数指向的是函数，对象指向的是对象



/***
obj.propName=value的赋值语句处理步骤如下:
1. 如果propName的attribute设置为不能设值，则返回
2. 如果obj.propName不存在，则为obj创建一个属性，名称为propName
3. 将obj.propName的值设为value

可以看到，设值过程并不会考虑Prototype链，道理很明显，
obj的内部[[Prototype]]是一个实例化的对象，
它不仅仅向obj共享属性，还可能向其它对象共享属性，修改它可能影响其它对象。
***/

//from: http://www.cnblogs.com/fool/archive/2010/10/13/1850588.html

