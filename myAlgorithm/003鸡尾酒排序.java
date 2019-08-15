private static int[] CrocktailSort(int[] array){
  if(array == null || array.length <= 1){
    return array;
  }
  int temp = 0;
  int leftBorder = 0;
  int rightBorder = array.length - 1;
  int leftExchangeIndex = 0;
  int rightExchangeIndex = 0;
  for(int i = 0; i < array.length/2; i++){
    boolean isSorted = true;
    for(int j = leftBorder; j < rightBorder; j++){
      if(array[j] > array[j + 1]){
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSorted = false;
        rightExchangeIndex = j;
      }
    }
    rightBorder = rightExchangeIndex;
    if(isSorted){
      break;
    }
    isSorted = true;
    for(int j = rightBorder; j > leftBorder; j--){
      if(array[j] < array[j - 1]){
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        isSorted = false;
        leftExchangeIndex = j;
      }
    }
    leftBorder = leftExchangeIndex;
    if(isSorted){
      break;
    }
  }
  return array;
}
