/*
  尝试实现注释部分的Javascript代码，
  可在其他任何地方添加更多代码（如不能实现，说明一下不能实现的原因）：
*/

//四种调用模式：方法调用模式，函数调用模式，构造器调用模式，apply调用模式

//函数调用模式
var Obj = function(msg){
    this.msg = msg;
    this.shout = function(){
        alert(this.msg);
    };
    this.waitAndShout = function(){
        // var that = this;    //加不加都行
        setTimeout(this.shout, 5000);
        //隔五秒钟后执行上面的shout方法
    };
    return this;
};
//this就是window，总感觉怪怪的，好像有问题
var obj = Obj("函数调用模式");
console.log(obj);
console.log(obj.msg);
console.log(obj.shout);
console.log(obj.waitAndShout);
obj.waitAndShout();
//全部绑定到window上，不好



//构造器调用模式
var Obje = function(msg){
    this.msg = msg;
    this.shout = function(){
        console.log(this);
        alert(this.msg);
    };
    this.waitAndShout = function(){
        //var that = this;    //加不加都行，问题不是这里的this，是shout中的this

        /***
        不行，this绑定错误。
        ***/
        //setTimeout(this.shout, 5000);

        /***
        可以。可惜Function.prototype.bind方法是ES5新增的标准，
        测试了IE系列发现IE6-8都不支持，只有IE9+可以使用
        http://www.jb51.net/article/30858.htm    来源，非常好
        ***/
        //setTimeout(this.shout.bind(this), 5000);

        /***
        有问题。是直接执行的，时间延迟没有了，
        应该涉及到setTimeout的用法
        ***/
        //setTimeout(this.shout.call(this), 5000);

        /***
        模拟Function.prototype.bind
        参见上面的来源，简直完美
        ***/
        /***
        setTimeout((function(a,b){ 
            return function(){ 
                b.call(a); 
            };
        })(this,this.shout), 5000);
        ***/

        /***
        可以，还是用到了that。
        原来是我用的不对
        ***/
        var that = this;
        setTimeout(function(){
            that.shout();
        }, 5000);

        //隔五秒钟后执行上面的shout方法
    };
    return this;
};
//obje的this是Obje，setTimeout的this是window
var obje = new Obje("构造器调用模式");
console.log(obje);
console.log(obje.msg);
console.log(obje.shout);
console.log(obje.waitAndShout);
obje.waitAndShout();
//Obje、obje绑定到window上，剩下的绑定到obje上