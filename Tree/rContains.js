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

  rootcontains(value,currentNode=this.root) {
    if(currentNode===null)  return false

    if(value == currentNode.value) return true

    if(value< currentNode.value) {
        return this.rootcontains(value,currentNode.left)
    }else {
      return this.rootcontains(value, currentNode.right);
    }
  }
} // end of class
