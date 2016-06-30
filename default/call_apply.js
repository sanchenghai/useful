/*
  ECMAScript规范给所有函数都定义了Call()与apply()两个方法，
  这两个方法是容易混淆的,因为它们的作用一样,只是使用方式不同. 
  call与apply的第一个参数都是需要调用的函数对象，在函数体内
  这个参数就是this的值，剩余的参数是需要传递给函数的值，
  call与apply的不同就是call传的值可以是任意的，而apply传
  的剩余值必须为数组。
*/

function Cat(){
  this.name = "cat";
  this.shout = function(){
    console.log("cat is "+this.name);
    console.log(this);
  };
}
function Tiger(){
  this.name = "tiger";
  this.shout = function(){
    console.log("tiger is "+this.name);
  };
}

var cat = new Cat();
var tiger = new Tiger();
console.log(cat); //Cat{}
cat.shout(); //cat is cat    Cat{}    this是Cat{}
tiger.shout(); //tiger is tiger    this是Tiger{}
cat.shout.apply(tiger); //cat is tiger    Tiger{}    this是Tiger{}
cat.shout.call(tiger); //cat is tiger    Tiger{}    this是Tiger{}