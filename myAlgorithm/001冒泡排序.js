function bubbleSort(array){
  if(typeof array != "object"){
    return array;
  }
  if(array.length  <= 1){
    return array;
  }
  for(var i = 0; i < array.length - 1; i++){
    for(var j = 0; j < array.length - 1 - i; j++){
      if(array[j + 1] < array[j]){
        var temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
