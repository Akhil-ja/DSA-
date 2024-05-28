class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class SinglyLinkedList{


    constructor(){
        this.head=null
        this.tail=null
        this.length=null
    }

    unshift(val){

        const newNode=new node(val);

        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{

          newNode.next=this.head
          this.head=newNode

        }

        this.length++
        return this
    }
}