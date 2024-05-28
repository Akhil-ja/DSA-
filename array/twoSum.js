function twoSum(nums, target) {
 
  for (let i = 0; i < nums.length; i++) {

    const complementIndex = nums.indexOf(target - nums[i]);

    if (complementIndex !== -1 && complementIndex !== i) {
      return [nums[i], nums[complementIndex]];
    }
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));



var twoSum = function (nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return [];
};
