/*
   请编写一个JavaScript 函数toRGB，它的作用是转换CSS中常用的颜色编码。 要求：
   alert(toRGB("#0000FF"));          // 输出 rgb(0, 0, 255)
   alert(toRGB("invalid"));          // 输出 invalid
   alert(toRGB("#G00"));              // 输出 #G00
*/
function toRGB(color) {
    var regex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        match = color.match(regex);
    return match ? 'rgb('+parseInt(match[1], 16)+','+parseInt(match[2], 16)+','+parseInt(match[3], 16)+')' : color;
}