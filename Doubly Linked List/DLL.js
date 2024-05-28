class Node{
    constructor(val){
        this.val=val;
        this.next=null
        this.prev=null
    }
}


class DoublyLinkedList{
    constructor(val){
        const newNode= new Node();

        this.head=newNode
        this.tail=newNode
        this.length=1
    }
}

let list =new DoublyLinkedList(7);
