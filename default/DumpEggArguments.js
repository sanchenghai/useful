//函数内定义与形式参数同名的变量并赋值，arguments对应的值会跟着改变
function say(msg,other,garbage){
    alert(arguments[1]);//world
    var other = 'nice to meet you!';
    var msg;
    alert(arguments.length);
    alert(msg);//hello
    alert(other);//nice to meet you!
    alert(arguments[1]);//nice to meet you!
    alert(garbage);//undefined
}
say('hello','world');
