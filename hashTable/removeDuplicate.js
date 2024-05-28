function removeDuplicates(arr) {
  const hash = {};
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!hash[element]) {
      hash[element] = true;
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

// Example usage:
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
