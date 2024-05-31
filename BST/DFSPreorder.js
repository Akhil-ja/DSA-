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

  DFSpreOrder(){
    let result=[]

    function treversal(currentNode){
        
        result.push(currentNode.value)

        if(currentNode.left) treversal(currentNode.left)

        if(currentNode.right) treversal(currentNode.right)
    }

    treversal(this.root)

    return result


  }

}
