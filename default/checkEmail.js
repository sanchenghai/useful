/***
请编写一个JavaScript函数，
它的作用是校验输入的字符串是否是一个有效的电子邮件地址。
要求： a)   使用正则表达式。
       b)   如果有效返回true ，反之为false。
***/
var checkEmail = function(email){
    var preg = "(^[a-zA-Z]|^[\\w-_\\.]*[a-zA-Z0-9])@(\\w+\\.)+\\w+$",
    pregObj  =new RegExp(preg);
    return pregObj.test(email);
};
console.log(checkEmail("24134@qq.com"));