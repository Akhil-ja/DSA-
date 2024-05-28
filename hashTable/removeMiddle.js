function removeMiddleElement(arr) {
  const hash = {};
  const uniqueArray = [];

  // Calculate the middle index
  const middleIndex = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    // Skip the middle element
    if (i === middleIndex) {
      continue;
    }

    const element = arr[i];
    if (!hash[element]) {
      hash[element] = true;
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const result = removeMiddleElement(arr);
console.log(result); // Output: [1, 2, 4, 5]
