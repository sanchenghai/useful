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

function bubbleSort(array){
  if(typeof array != "object"){
    return array;
  }
  if(array.length  <= 1){
    return array;
  }
  for(var i = 0; i < array.length - 1; i++){
    var isSorted = true;
    for(var j = 0; j < array.length - 1 - i; j++){
      if(array[j + 1] < array[j]){
        var temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        isSorted = false;
      }
    }
    if(isSorted){
      break;
    }
  }
  return array;
}

function bubbleSort(array){
  if(typeof array != "object"){
    return array;
  }
  if(array.length  <= 1){
    return array;
  }
  var lastExchangeIndex = 0;
  var sortedBorder = array.length - 1;
  for(var i = 0; i < array.length - 1; i++){
    var isSorted = true;
    for(var j = 0; j < sortedBorder; j++){
      if(array[j + 1] < array[j]){
        var temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        isSorted = false;
        lastExchangeIndex = j;
      }
    }
    sortedBorder = lastExchangeIndex;
    if(isSorted){
      break;
    }
  }
  return array;
}
