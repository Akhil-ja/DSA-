
class LinkedList {
  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  duplicate() {
    let encountered = new Set();
    let curr = this.head;
    let prev = null;
    let duplicates = [];
    while (curr) {
      if (encountered.has(curr.data)) {
        prev.next = curr.next;
        duplicates.push(curr.data);
      } else {
        encountered.add(curr.data);
        prev = curr;
      }
      curr = curr.next;
    }
    return `duplicate elements found ${duplicates.length}`;
  }

  isPalindrome() {
    let string1 = "";
    let string2 = "";
    let curr = this.head;
    while (curr) {
      string1 += curr.data;
      string2 = curr.data + string2;
      curr = curr.next;
    }
    return string1 === string2;
  }

  isPalindrome() {
    let arr = [];
    let temp = this.head;

    
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }

   
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] !== arr[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }

  search(data) {
    if (!this.head) {
      return null;
    } else {
      let i = 0;
      let curr = this.head;
      while (curr) {
        if (curr.data === data) {
          return `data is found at ${i} th index`;
        }

        curr = curr.next;
        i++;
      }
    }
  }

  middleElement() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return `middle element is ${slow.data}`;
  }

   removeElements () {
   let dummy = new ListNode(-1); 
   dummy.next = this.head;

   let current = dummy;

   while (current.next) {
       if (current.next.val === val) {
           current.next = current.next.next;
       } else {
           current = current.next;
       }
   }

   return dummy.next;
};

}