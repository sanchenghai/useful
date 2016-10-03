var toString = Object.prototype.toString,
hasOwnProperty = Object.prototype.hasOwnProperty;
 
function isPlainObject( obj ) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
 
    //Make sure that DOM nodes and window objects don't pass through, as well
    //windows objects:toString.call(window):IE [object Object] FF [object Window] chrome [window global] safari [object DOMWindow]
    //DOM nodes:toString.call(#div01):IE [object Object] FF [object Window] chrome [object global] safari [object DOMWindow]
    //结论：obj.nodeType || obj.setInterval主要是针对于IE浏览器进行判断
    //注：history,location,navigator,screen的setInterval为undefined
    if ( !obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval ) {
        return false;
    }
 
    // Not own constructor property must be Object
    // 除去自定义对象和内置对象的判断,如function Person(){} var p = new Person();String,Number
    if ( obj.constructor //有constructor属性
        && !hasOwnProperty.call(obj, "constructor") //并且constructor这个属性必须是在原型链中进行定义的
        && !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")//并且原型中有isPrototypeOf方法，一般只有Object的原型中才有这个方法
    ) {
        return false;
    }
     
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    //针对于复杂类结构，如有继承...
    /*
        //一个简单的测试
        function Animal(name){
 
        }
        function Person(name,age){
            Animal.call(this,name);
            this.age =age;
        }
        var p = new Person('jxl',20);
        for(key in p){
            alert(hasOwnProperty.call( p, key ))//true  ,   false
        }
    */
    var key;
    for ( key in obj ) {}
     
    return key === undefined || hasOwnProperty.call( obj, key );
}