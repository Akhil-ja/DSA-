/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  // Create an empty queue
  const queue = [];

  // Enqueue each character of the string into the queue
  for (const char of s) {
    queue.push(char);
  }

  // Initialize an empty string to store the reversed string
  let reversedString = "";

  // Dequeue characters from the queue and prepend them to the reversedString
  while (queue.length > 0) {
    reversedString = queue.shift() + reversedString;
  }

  return reversedString;
};

console.log(reverseString('akhil'));