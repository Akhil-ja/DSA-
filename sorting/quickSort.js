function partition(Arr, start = 0, end = Arr.length) {

  function swap(array, i, j) {
    [array[i],array[j]]=[array[j],array[i]]
  }

  let pivot = Arr[start];
  let i = start;
  let j = end;

  while (i < j) {
    
    while (Arr[i] <= pivot) {
      i++;
    }
    
    while (Arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(Arr, i, j);
    }

  }

  swap(Arr, start, j);

  return j;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let pivotIndex = partition(array, start, end);
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }
  return array;
}

console.log(quickSort([3, 2, 5,1,7]));


// 3 2 5 1 7

// 3 1 5 2 7

// 3 1 2 5 7

// 2 1 3 5 7


