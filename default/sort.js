/*
  请用JavaScript语言实现 sort 排序函数，
  要求：sort([5, 100, 6, 3, -12]) 
  返回 [-12, 3, 5, 6, 100]。
*/
function sort(arr){
 for(var i=0;i<arr.length-1;i++){
  for(var j=0;j<arr.length-i-1;j++){
    //console.log("==="+j);
    // console.log(arr[j]);
    // console.log(arr);
      if(arr[j]>arr[j+1]){
          var hand=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=hand;
      }
  }
 }
 return arr;
}
console.log(sort([5, 100, 6, 3, -12]));