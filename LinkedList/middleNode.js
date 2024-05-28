class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }
findMiddleNode() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}













