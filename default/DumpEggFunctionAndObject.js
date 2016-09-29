/***
函数就是对象,
代表函数的对象就是函数对象。
所有的函数对象是被Function这个函数对象构造出来的。
也就是说，Function是最顶层的构造器。
它构造了系统中所有的对象，
包括用户自定义对象，系统内置对象，甚至包括它自已。
这也表明Function具有自举性(自已构造自己的能力)。
这也间接决定了Function的[[call]]和[[constructor]]逻辑相同
***/
function Foo() {};
var foo = new Foo();
//Foo为foo的构造函数
alert(foo instanceof Foo); // true
//但是Function并不是foo的构造函数
alert(foo instanceof Function); // false
//Function为Foo的构造函数
alert(Foo instanceof Function);//true





/***
对于Object它是最顶层的对象，所有的对象都将继承Object的原型，
但是你也要明确的知道Object也是一个函数对象，
所以说Object是被Function构造出来的。
***/





alert(Function instanceof Function);//true 
alert(Function instanceof Object);//true    
alert(Object instanceof Function);//true 
         
function Foo() {};
var foo = new Foo();
alert(foo instanceof Foo); // true
alert(foo instanceof Function); // false
alert(foo instanceof Object); // true
alert(Foo instanceof Function); // true
alert(Foo instanceof Object); // true