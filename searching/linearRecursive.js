function linearSearchRecursive(arr, target, index = 0) {
  
  if (index >= arr.length) {
    return -1;
  }


  if (arr[index] === target) {
    return index;
  }

  
  return linearSearchRecursive(arr, target, index + 1);
}


const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;
console.log(linearSearchRecursive(arr, target));
