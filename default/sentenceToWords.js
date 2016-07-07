//将语句以空格分割成单词。
//中文一般没有空格，所以无效；无法处理标点符号
//自己写的，就是渣啊。
String.prototype.toWords = function() {
    return this.split(/\s+/);
};