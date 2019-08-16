private static int[] shellSort(int[] array){
  if(array==null || array.length<=1){
    return array;
  }
  int len = array.length;
  int temp = 0;
  int gap = len / 2;
  while(gap>0){
    for(int i = gap; i < len; i++){
      temp = array[i];
      int preIndex = i - gap;
      for(; preIndex >= 0 && array[preIndex] > temp; preIndex -= gap){
        array[preIndex+gap]=array[preIndex];
      }
      array[preIndex+gap]=temp;
    }
    gap = gap/2;
  }
  return array;
}
