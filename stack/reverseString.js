/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  // Create an empty stack
  const stack = [];

  // Push each character of the string onto the stack
  for (const char of s) {
    stack.push(char);
  }

  // Initialize an empty string to store the reversed string
  let reversedString = "";

  // Pop characters from the stack and append them to the reversedString
  while (stack.length > 0) {
    reversedString =reversedString + stack.pop();
  }

  return reversedString;
};


console.log(reverseString('akhil'));