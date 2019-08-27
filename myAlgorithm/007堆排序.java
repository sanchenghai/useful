//上浮调整
private static void upAdjust(int[] array){
  if(array == null || array.length <= 1){
    return;
  }
  int childIndex = array.length - 1;
  int parentIndex = (childIndex - 1) / 2;
  int temp = array[childIndex];
  while(childIndex > 0 && temp < array[parentIndex]){
    array[childIndex] = array[parentIndex];
    childIndex = parentIndex;
    parentIndex = (parentIndex - 1) / 2;
  }
  array[childIndex] = temp;
}

private static void downAdjust(int[] array, int parentIndex, int length){
  if(array == null || array.length <= 1){
    return;
  }
  int temp = array[parentIndex];
  int childIndex = 2 * parentIndex + 1;
  while(childIndex < length){
    if(childIndex + 1 < length && array[childIndex + 1] < array[childIndex]){
      childIndex++;
    }
    if(temp <= array[childIndex]){
      break;
    }
    array[parentIndex] = array[childIndex];
    parentIndex = childIndex;
    childIndex = 2 * parentIndex + 1;
  }
  array[parentIndex] = temp;
}

private static void buildHeap(int[] array){
  if(array == null || array.length <= 1){
    return;
  }
  for(int i = array.length / 2; i >= 0; i--){
    downAdjust(array, i, array.length - 1);
  }
}

private static void heapSort(int[] array){
  if(array == null || array.length <= 1){
    return;
  }
}
