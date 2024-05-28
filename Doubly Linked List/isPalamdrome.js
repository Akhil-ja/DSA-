

    class DoubleLinkedList {
      isPalindrome() {
        if (this.length <= 1) return true;

        let forwardNode = this.head;
        let backwardNode = this.tail;
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
          if (forwardNode.value !== backwardNode.value) return false;
          forwardNode = forwardNode.next;
          backwardNode = backwardNode.prev;
        }
        return true;
      }
    }