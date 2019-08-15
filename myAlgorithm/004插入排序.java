private static int[] insertionSort(int[] array){
  if (array==null||array.length<=1) {
    return array;
  }
  for (int i = 1; i < array.length; i++ ) {
    int temp = array[i];
    int j = i-1;
    for(; j >= 0&&temp < array[j]; j--){
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  return array;
}
