//Animal构造函数
function Animal(name){
    this.name = name;
}
//Animal原型对象
Animal.prototype = {
    id:"Animal",
    sleep:function(){
        alert("sleep");
    }
}
 
function Human(name,age){
    Animal.call(this,name);
    this.age = age;
}
 
Human.prototype = new Animal();
Human.prototype.id = "Human";
 
Human.prototype.say = function(){
    alert("hello everyone,My name is "+this.name +",I'm "+this.age+" and I'm a "+this.id);
}
 
//Human相关调用
var jxl = new Human('笨蛋',25);
alert(jxl.name);//笨蛋
alert(jxl.id);//Human
jxl.say();//hello everyone,My name is 笨蛋,I'm 25 and I'm a Human
 
alert(Animal.prototype.isPrototypeOf(jxl));//true
alert(Object.prototype.isPrototypeOf(jxl));//true

//from: http://www.cnblogs.com/fool/archive/2010/10/13/1849734.html