/**
 * @param {number[]} stack
 * @return {number[]}
 */
var removeMiddleElement = function (stack) {
  // Calculate the length of the stack
  const n = stack.length;

  // If the stack is empty or has only one element, return the stack
  if (n <= 1) {
    return stack;
  }

  // Create a temporary stack
  const temp = [];

  // Move the first half of the elements from the original stack to the temp stack
  const midIndex = Math.floor(n / 2);
  for (let i = 0; i < midIndex; i++) {
    temp.push(stack.pop());
  }

  // Remove the middle element
  stack.pop();

  // Move the elements back from the temp stack to the original stack
  while (temp.length > 0) {
    stack.push(temp.pop());
  }

  return stack;
};

console.log(removeMiddleElement([1,5,8,4,7]));