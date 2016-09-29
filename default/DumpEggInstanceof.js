function Cat(){}
Cat.prototype = {}
 
function Dog(){}
Dog.prototype ={}
 
var dog1 = new Dog();
alert(dog1 instanceof Dog);//true
alert(dog1 instanceof Object);//true
 
Dog.prototype = Cat.prototype;
alert(dog1 instanceof Dog);//false
alert(dog1 instanceof Cat);//false
alert(dog1 instanceof Object);//true;
 
var  dog2= new Dog();
alert(dog2 instanceof Dog);//true
alert(dog2 instanceof Cat);//true
alert(dog2 instanceof Object);//true
 
Dog.prototype = null;
var dog3 = new Dog();
alert(dog3 instanceof Cat);//false
alert(dog3 instanceof Object);//true
alert(dog3 instanceof Dog);//error

/***
instanceof 检测一个对象A是不是另一个对象B的实例的原理是：
查看对象B的prototype指向的对象是否在对象A的[[prototype]]链上。
如果在，则返回true,如果不在则返回false。
不过有一个特殊的情况，当对象B的prototype为null将会报错(类似于空指针异常)。
***/