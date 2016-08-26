var forEach = (function(){
    //数组与伪数组的遍历
    var _Array_forEach = function (array, block, context) {
        if (array == null) return;
        //对String进行特殊处理
        if(typeof array == 'string'){
            array = array.split('');
        }
        var i = 0,length = array.length;
        for (;i < length && block.call(context, array[i], (i+1), array)!==false; i++) {}   
    }; 
    //对象的遍历
    var _Function_forEach = function (object, block, context) {  
        for (var key in object) {  
           //只遍历本地属性  
           if (object.hasOwnProperty(key)&&block.call(context, object[key], key, object)===false){
                break;
           }
        }  
    };  
    return function(object, block, context){
        if (object == null) return;
        if (typeof object.length == "number") {  
          _Array_forEach(object, block, context);  
        }else{   
            _Function_forEach(object, block, context);  
        }
    };
})();



//1:1   \n  2:2 
forEach([1,2,3,4,5],function(el,index){
    if(index>2){
        return false;
    }
    alert(index+":"+el);
});
 
function print(el,index){
    alert(index+":"+el);
}
//a:a   \n  b:b     \n  c:c
forEach({a:'a',b:'b',c:'c'},print);
 
//1:笨   \n  2:蛋     \n  3:的     \n  4:座     \n  5:右     \n  6:铭
forEach("笨蛋的座右铭",print);
     
function Person(name, age) {  
  this.name = name || "";  
  this.age = age || 0;  
};  
Person.prototype = new Person;  
var fred = new Person("笨蛋的座右铭", 25);  
fred.language = "chinese";//极晚绑定  
//name:jxl  \n  age:22  \n  language:chinese
forEach(fred,print);