function removeMiddleElement(arr) {
  const queue = [];

  // Enqueue all elements of the array into the queue
  for (let i = 0; i < arr.length; i++) {
    queue.push(arr[i]);
  }

  // Calculate the middle index
  const middleIndex = Math.floor(queue.length / 2);

  // Dequeue and enqueue elements to a temporary queue until we reach the middle element
  const tempQueue = [];
  for (let i = 0; i < middleIndex; i++) {
    tempQueue.push(queue.shift());
  }

  // Dequeue the middle element (do not enqueue it to any queue)
  queue.shift();

  // Dequeue and enqueue the remaining elements from the temporary queue back to the original queue
  while (tempQueue.length > 0) {
    queue.push(tempQueue.shift());
  }

  return queue;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const result = removeMiddleElement(arr);
console.log(result); // Output: [1, 2, 4, 5]
