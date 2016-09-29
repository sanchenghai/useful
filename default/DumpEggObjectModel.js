/***
Function指向系统内置的函数构造器(build-in Function constructor)；
Function具有自举性；系统中所有函数都是由Function构造。
***/
//Passed in FF2.0, IE7, Opera9.25, Safari3.0.4
Function==Function.constructor //result: true
Function==Function.prototype.constructor //result: true
Function==Object.constructor //result: true
//Function also equals to Number.constructor, String.constructor, Array.constructor, RegExp.constructor, etc.
function fn(){}
Function==fn.constructor //result: true