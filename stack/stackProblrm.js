//is valid

var isValid = function (s) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      let c = stack[stack.length - 1];
      if (pairs[c] !== s[i]) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
};

//next greatest

var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
  }
  return nums1;
};
