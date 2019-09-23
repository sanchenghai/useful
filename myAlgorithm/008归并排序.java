public static int[] mergeSort(int[] array){
  if(array == null || array.length <= 1){
    return array;
  }
  int length = array.length;
  int middle = length / 2;
  int[] leftArr = Arrays.copyOfRange(array, 0, middle);
  int[] rightArr = Arrays.copyOfRange(array, middle, length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

public static int[] merge(int[] leftArr, int[] rightArr){
  int leftLen = leftArr.length;
  int rightLen = rightArr.length;
  int length = leftLen + rightLen;
  int [] resArr = new int[length];
  int leftCount = 0;
  int rightCount = 0;
  while((leftLen > leftCount) && (rightLen > rightCount)){
    if(leftArr[leftCount] < rightArr[rightCount]){
      resArr[leftCount + rightCount] = leftArr[leftCount];
      leftCount++;
    }else{
      resArr[leftCount + rightCount] = rightArr[rightCount];
      rightCount++;
    }
  }
  while(leftLen > leftCount){
    resArr[leftCount + rightCount] = leftArr[leftCount];
    leftCount++;
  }
  while(rightLen > rightCount){
    resArr[leftCount + rightCount] = rightArr[rightCount];
    rightCount++;
  }
  return resArr;
}
