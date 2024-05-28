class DoubleLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
  }
  

  pop(val){
        if(!this.head) return undefined

        if(this.lenght===1){
            this.head==null
            this,head==null
        }

        let temp=this.tail;
        this.tail=this.tail.prev
        this.tail.next=null
        temp.pre=null
        this.length--
  }


}
