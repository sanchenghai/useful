//原始版本
private static int[] bubbleSort(int[] array){
  if(array == null || array.length <= 1){
    return array;
  }
  for(int i = 0; i < array.length - 1; i++){
    for(int j = 0; j < array.length - i - 1; j++){
      if(array[j] > array[j + 1]){
        int temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//改进版本
private static int[] bubbleSort(int[] array){
  if(array == null || array.length <= 1){
    return array;
  }
  for(int i = 0; i < array.length - 1; i++){
    boolean isSorted = true;
    for(int j = 0; j < array.length - i - 1; j++){
      if(array[j] > array[j + 1]){
        int temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSorted = false;
      }
    }
    if(isSorted){
      break;
    }
  }
  return array;
}

//终极改进版本
private static int[] bubbleSort(int[] array){
  if(array == null || array.length <= 1){
    return array;
  }
  int lastExchangeIndex = 0;
  int sortBorder = array.length - 1;
  for(int i = 0; i < array.length - 1; i++){
    boolean isSorted = true;
    for(int j = 0; j < sortBorder; j++){
      if(array[j] > array[j + 1]){
        int temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSorted = false;
        lastExchangeIndex = j;
      }
    }
    sortBorder = lastExchangeIndex;
    if(isSorted){
      break;
    }
  }
  return array;
}
