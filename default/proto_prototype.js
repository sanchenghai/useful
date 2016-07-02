/***
js基本类型：Number String Boolean Object Undefined Function

Function是一种特殊的Object

显示(Chrome)：
对象：属性、方法、__proto__
函数：arguments、caller、length、name、prototype、__proto__、<function scope>

提示(Chrome):
对象:__defineGetter__、__defineSetter__、__lookupGetter__、__lookupSetter__
     constructor、hasOwnProperty、isPrototypeOf、propertyIsEnumerable、
     toLocalString、toString、valueOf、属性、方法
函数：__defineGetter__、__defineSetter__、__lookupGetter__、__lookupSetter__
      apply、arguments、bind、call、caller、constructor、hasOwnProperty、
      isPrototypeOf、length、name、propertyIsEnumerable、prototype、
      toLocalString、toString、valueOf、



构造函数创建对象的过程：
var Person = function () { };  
var p = new Person();  
很简单的一段代码，我们来看看这个new究竟做了什么？我们可以把new的过程拆分成以下三步：
<1> var p={}; 也就是说，初始化一个对象p。
<2> p.__proto__=Person.prototype;
<3> Person.call(p);也就是说构造p，也可以称之为初始化p。
***/

var Person = function () {};
var Programmer = function () {};
Programmer.prototype = new Person();
var p = new Programmer();
/***
分析
p.__proto__ = Programmer.prototype;
Programmer.prototype = new Person(); 设 var p1 = new Person(); Programmer.prototype = p1; p.__proto__ = p1;
p1.__proto__ = Person.prototype;
Programmer.prototype.__proto__ = Person.prototype;
p.__proto__.__proto__ = Person.prototype


结论: p是new Programmer()对象
      p.__proto__是new Person()对象
      p.__proto__.__proto__是Person空对象

      new使得__proto__和prototype混合了
***/