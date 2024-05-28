class Stack {
  constructor() {
    this.queue = [];
  }

  push(value) {
    const length = this.queue.length;
    this.queue.push(value);

    // Rotate the queue to make the newly added element at the front
    for (let i = 0; i < length; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack underflow";
    }
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
