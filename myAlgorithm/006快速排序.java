//填坑法
	private static int[] quickSort(int[] array, int startIndex, int endIndex){
	  if(array == null || array.length <= 1 || startIndex >= endIndex){
	    return array;
	  }
	  int pivotIndex = partition(array, startIndex, endIndex);
	  quickSort(array, startIndex, pivotIndex - 1);
	  quickSort(array, pivotIndex + 1, endIndex);
	  return array;
	}

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
