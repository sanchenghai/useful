function bubbleSort(array){
  if(typeof array != "object"){
    return array;
  }
  if(array.length  <= 1){
    return array;
  }
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < i; j++){
      var temp;
      if(array[i] > array[j]){
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}
