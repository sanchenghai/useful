//数组
//数组长度：length属性的值是这个数组最大整数属性名加上1，不一定等于数组里的属性个数
var myArray = [];
console.log(myArray.length);    //0
myArray[1000] = true;
console.log(myArray.length);    //1001



myArray.push("go");
myArray.splice(2, 1);