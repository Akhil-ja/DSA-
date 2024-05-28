function binarySearch(arr, target) {
  return binarySearchHelper(arr, target, 0, arr.length - 1);
}

function binarySearchHelper(arr, target, start, end) {
  if (start > end) {
    return -1; 
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return middle;
  } else if (target < arr[middle]) {
    return binarySearchHelper(arr, target, start, middle - 1); 
  } else {
    return binarySearchHelper(arr, target, middle + 1, end); 
  }
}


console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5));