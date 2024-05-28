class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeTwoList(l1, l2) {
  let dummyHead = new Node(-1);
  let curr = dummyHead;

  while (l1 && l2) {
    if (l1.data < l2.data) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummyHead.next;
}

let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);

let list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);

let mergetList = mergeTwoList(list1, list2);

let result = "";
while (mergetList) {
  result += `${mergetList.data} `;
  mergetList = mergetList.next;
}
console.log(result);


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;
    
    while (l1 && l2) {
        if(l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2;
            l2 = l2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = l1 || l2;
    
    return tempNode.next;
};