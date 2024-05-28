function twoSum(nums, target) {
  // Create an empty hash map to store the complement values and their indices
  const numMap = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement that we need to find
    const complement = target - nums[i];

    // Check if the complement is already in the hash map
    if (complement in numMap) {
      // If found, return the indices
      return [numMap[complement], i];
    }

    // If not found, store the current number and its index in the hash map
    numMap[nums[i]] = i;
  }

  // If no solution is found, return an empty array or throw an error
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
