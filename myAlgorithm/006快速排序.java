private static int[] quickSort(int[] array, int startIndex, int endIndex){
  if(array == null || array.length <= 1 || startIndex >= endIndex){
    return array;
  }
  int pivotIndex = partition(array, startIndex, endIndex);
  quickSort(array, startIndex, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, endIndex);
  return array;
}

//填坑法
private static int partition(int[] array, int startIndex, int endIndex){
  int pivot = array[startIndex];
  int left = startIndex;
  int right = endIndex;
  int index = startIndex;
  while(right >= left){
    while(right >= left){
      if(array[right]<pivot){
        array[left] = array[right];
        index = right;
        left++;
        break;
      }
      right--;
    }
    while(right >= left){
      if(array[left]>pivot){
        array[right] = array[left];
        index = left;
        right--;
        break;
      }
      left++;
    }
  }
  array[index] = pivot;
  return index;
}

//交换法
private static int partition(int[] array, int startIndex, int endIndex){
  int pivot = array[startIndex];
  int left = startIndex;
  int right = endIndex;
  while(right != left){
    while(left < right && array[right] > pivot){
      right--;
    }
    while(left < right && array[left] <= pivot){
      left++;
    }
    if(left < right){
      int temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }
  }
  int temp = array[left];
  array[left] = array[startIndex];
  array[startIndex] = temp;
  return left;
}

private static int[] quickSort(int[] array, int startIndex, int endIndex){
  if(array == null || array.length <= 1 || startIndex >= endIndex){
    return array;
  }
  Stack<Map<String, Integer>> quickSortStack = new Stack<Map<String, Integer>>();
  Map<String, Integer> rootParam = new HashMap<String, Integer>();
  rootParam.put("startIndex", startIndex);
  rootParam.put("endIndex", endIndex);
  quickSortStack.push(rootParam);
  while(!quickSortStack.isEmpty()){
    Map<String, Integer> param = quickSortStack.pop();
    int pivotIndex = partition(array, param.get("startIndex"), param.get("endIndex"));
    if(param.get("startIndex")<pivotIndex-1){
      Map<String, Integer> leftParam = new HashMap<String, Integer>();
      leftParam.put("startIndex", param.get("startIndex"));
      leftParam.put("endIndex", pivotIndex - 1);
      quickSortStack.push(leftParam);
    }
    if(pivotIndex+1<param.get("endIndex")){
      Map<String, Integer> rightParam = new HashMap<String, Integer>();
      rightParam.put("startIndex", pivotIndex + 1);
      rightParam.put("endIndex", param.get("endIndex"));
      quickSortStack.push(rightParam);
    }
  }
  return array;
}
