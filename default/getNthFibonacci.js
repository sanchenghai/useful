//Fibonacci数列
function getNthFibonacci(count) {
 var arr = [1,1];
 if(count==0||count==1){
  return 1;
 }else{
 for(var i = 1;i<count;i++){
   arr.push(arr[i-1]+arr[i]);
 }
 console.log(arr);
 return arr[count];
 }
}
getNthFibonacci(8);


/*
  标准答案
  function getNthFibonacci(count) {
      if (count <= 1) {
          return 1;
      }
      return getNthFibonacci(count - 1) + getNthFibonacci(count - 2);
  }
*/