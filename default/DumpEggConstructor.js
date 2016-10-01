/***
在 JavaScript 中，
每个函数都有名为“prototype”的属性，用于引用原型对象。
此原型对象又有名为“constructor”的属性，它反过来引用函数本身。
这是一种循环引用
***/
function Dog(){}
alert(Dog === Dog.prototype.constructor);//true