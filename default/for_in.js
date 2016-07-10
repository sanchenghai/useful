var obj = {"name":"zhangsan","age":20};
for(var b in obj){
  console.log(b);
  console.log(obj[b]);
}
for(var a in [1,2,3,4,5]){
  console.log(a);
}
//获得的是键名，而不是键值