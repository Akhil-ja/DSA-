class node {
  constructure(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructure() {
    this.root = null;
  }

  DFSpreOrder() {
    let result = [];

    function treversal(currentNode) {

        
      if (currentNode.left) treversal(currentNode.left);

      if (currentNode.right) treversal(currentNode.right);
      
      result.push(currentNode.value);

    }

    treversal(this.root);

    return result;
  }
}
