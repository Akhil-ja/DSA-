function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: if the left pointer exceeds the right pointer, the target is not found
  if (left > right) {
    return -1;
  }

  // Calculate the middle index
  let mid = Math.floor((left + right) / 2);

  // If the target is found at the middle index, return the index
  if (arr[mid] === target) {
    return mid;
  }
  // If the target is less than the element at the middle index, search the left half
  else if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }
  // If the target is greater than the element at the middle index, search the right half
  else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const resultIndex = binarySearch(arr, target);
console.log("Target", target, "found at index:", resultIndex);
