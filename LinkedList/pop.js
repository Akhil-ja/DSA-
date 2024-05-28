class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pop(val){
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
   
    return temp;
  }

  

  printList() {
    let currentNode = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(values.join(" => "));
  }
}

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("WORLD");
list.push("I'm");
list.printList();
