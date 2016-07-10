/***
输入数组arr2，arr1
arr1有三位，第一位是arr2的长度，第三位是arr2连续相加的个数，
返回相加和小于等于arr1第二位的个数
***/
function TransCrime(arr1,arr2){
  //arr1是样例输入第一行，是一个数组，如[11,4,2]
  //arr2是样例输入第二行，是一个数组，如[2,2,0,7,3,2,2,4,9,1,4]
  var count = 0;
  for(var i = 0;i<(arr1[0]-arr1[2]+1);i++){
    var result = 0;
    for(var j = 0;j<arr1[2];j++){
      result += arr2[i+j];
      console.log("j="+j+"  "+result);
    }
    if(result<=arr1[1]){
      count++;
    }
    console.log("result="+result+"  count="+count);
  }
  return count;
}

var al = TransCrime([11,12,4],[2,2,0,7,3,2,2,4,9,1,4]);
console.log(al);