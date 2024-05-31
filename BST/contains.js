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

  insert(value) {
    const newNode = new node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value){
    if(this.root==null) return false

    let temp=this.root

    while(temp){
        if(value<temp.value){
            temp=tmep.left
        }else if (value > temp.value) {
          temp = temp.right;
        }else{
            return true
        }
    }

    return false
  }
  
} // end of class
