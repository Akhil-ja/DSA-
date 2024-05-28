 class DoublyLinkedList {

    constructor(value){
        this.next=null
        this.prev=null
        this.length=0
    }

   reverse() {
     let current = this.head;
     let temp = current.prev;

     while (current !== null) {
       temp = current.prev;
       current.prev = current.next;
       current.next = temp;
       current = current.prev;
     }
       
     temp = this.head; 
     this.head = this.tail;
     this.tail = temp;
   }
 }
 
