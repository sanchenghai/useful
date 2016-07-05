/***
所有构造器/函数的__proto__都指向Function.prototype，
它是一个空函数（Empty function）。
上面说的“所有构造器/函数”当然包括自定义的。
***/
console.log(Number.__proto__ === Function.prototype);   // true
console.log(Boolean.__proto__ === Function.prototype);  // true
console.log(String.__proto__ === Function.prototype);   // true
console.log(Object.__proto__ === Function.prototype);   // true
console.log(Function.__proto__ === Function.prototype); // true
console.log(Array.__proto__ === Function.prototype);    // true
console.log(RegExp.__proto__ === Function.prototype);   // true
console.log(Error.__proto__ === Function.prototype);    // true
console.log(Date.__proto__ === Function.prototype);     // true



/***
JavaScript中有内置(build-in)构造器/对象共计12个（ES5中新加了JSON），
这里列举了可访问的8个构造器。
剩下如Global不能直接访问，Arguments仅在函数调用时由JS引擎创建，
Math，JSON是以对象形式存在的，无需new,它们的__proto__是Object.prototype。
***/
console.log(Math.__proto__ === Object.prototype);       // true
console.log(JSON.__proto__ === Object.prototype);       // true



/***
这说明什么呢？
所有的构造器都来自于Function.prototype，
甚至包括根构造器Object及Function自身。
所有构造器都继承了Function.prototype的属性及方法，
如length、call、apply、bind（ES5）。
Function.prototype也是唯一一个
typeof XXX.prototype为 “function”的prototype。
其它的构造器的prototype都是一个对象。
***/
console.log(typeof Function.prototype); // function
console.log(typeof Object.prototype);   // object
console.log(typeof Number.prototype);   // object
console.log(typeof Boolean.prototype);  // object
console.log(typeof String.prototype);   // object
console.log(typeof Array.prototype);    // object
console.log(typeof RegExp.prototype);   // object
console.log(typeof Error.prototype);    // object
console.log(typeof Date.prototype);     // object

console.log(Function.prototype); // function Empty() {}
console.log(Object.prototype);   // Object {}
console.log(Number.prototype);   // Number {[[PrimitiveValue]]: 0}
console.log(Boolean.prototype);  // Boolean {[[PrimitiveValue]]: false}
console.log(String.prototype);   // String {length: 0, [[PrimitiveValue]]: ""}
console.log(Array.prototype);    // [Symbol(Symbol.unscopables): Object]
console.log(RegExp.prototype);   // /(?:)/
console.log(Error.prototype);    // d {name: "Error", message: ""}
console.log(Date.prototype);     // Invalid Date



/***
知道了所有构造器（含内置及自定义）的__proto__都是Function.prototype，
那Function.prototype的__proto__是谁呢？
***/
console.log(Function.prototype.__proto__ === Object.prototype); // true
/***
这说明所有的构造器也都是一个普通JS对象，可以给构造器添加/删除属性等。
同时它也继承了Object.prototype上的所有方法：toString、valueOf、hasOwnProperty等。
最后Object.prototype的__proto__是谁？已经到顶了，为null。
***/
Object.prototype.__proto__ === null  // true





/***
所有对象的__proto__都指向其构造器的prototype
每个对象都有一个constructor属性，可以获取它的构造器
请注意区别：两者并不一定相同。在直接重写了原型时就是如此。
***/

/***
使用对象直接量方式定义的对象其构造器（constructor）指向的是根构造器Object，
Object.prototype是一个空对象{}
***/



/***
上面代码中用到的__proto__目前在IE6/7/8/9中都不支持。
IE9中可以使用Object.getPrototypeOf(ES5)获取对象的内部原型。
***/
var p = {};
var __proto__ = Object.getPrototypeOf(p);
console.log(__proto__ === Object.prototype); // true