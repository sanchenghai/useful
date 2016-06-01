//对象通过引用来传递，他们永远不会被拷贝。
var x = stooge;
x.nickname = "Curly";
var nick = stooge.nickname;    //因为x和stooge是指向同一个对象的引用，所以nick为"Curly"

var a = {}, b = {}, c = {};    //a、b和c每个都引用一个不同的空对象

a = b = c = {};    //a、b和c都引用同一个空对象