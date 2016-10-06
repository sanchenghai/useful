var increment = (function(){
    var id = 0;
    return function(){
        return ++id;
    };
})();
 
alert(increment());//1
alert(increment());//2

/***
外层匿名函数返回的是一个内嵌函数，
内嵌函数使用了外层匿名函数的局部变量id。
照理外层匿名函数的局部变量在返回时就超出了作用域,
因此increment()调用无法使用才对。
这就是闭包Closure，即函数调用返回了一个内嵌函数，
而内嵌函数引用了外部函数的局部变量、参数等这些应当被关闭(Close)了的资源。

根据Scope Chain的理解可以解释，
返回的内嵌函数已经持有了构造它时的Scope Chain，
虽然outer返回导致这些对象超出了作用域、生存期范围，
但JavaScript使用自动垃圾回收来释放对象内存: 
按照规则定期检查，对象没有任何引用才被释放。
因此上面的代码能够正确运行。
***/