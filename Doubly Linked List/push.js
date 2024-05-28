

class DoubleLinkedList{

    constructor(val){
        this.head=null
        this.tail=null
    }
    push(value){
     if(!this.head){
        this.head=newNode
        this.tail=newNode

     }else{
        this.tail.next=newNode
        newNode.prev=this.tail
        this.tail=newNode
     }
     this.length++;
}
}