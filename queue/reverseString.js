class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.unshift(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

function reverseString(str) {
  let queue = new Queue();
  let reversedString = "";

  // Enqueue characters of the string
  for (let i = 0; i < str.length; i++) {
    queue.enqueue(str[i]);
  }

  // Dequeue characters to form reversed string
  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
}

// Example usage:
const inputString = "Hello, world!";
const reversedString = reverseString(inputString);
console.log("Original string:", inputString);
console.log("Reversed string:", reversedString);
