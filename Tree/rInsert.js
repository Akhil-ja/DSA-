class node {
  constructure(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructure() {
    this.root = null;
  }

  #rinsert(value,currentNode=this.root) {

        if(currentNode==null) return new node(value)

    if (value < currentNode.value) {
      currentNode.left = this.#rinsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#rinsert(value, currentNode.right);
    }

    return currentNode
  }

    rInsert(value){
        if(this.root === null) this.root=new node(value)
            this.#rinsert(value)
    }

} // end of class
