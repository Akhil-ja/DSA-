 class node{
    constructure(value){
        this.value=value
        this.left=null
        this.right=null
    }
 }

 class BST{
    constructure(){
        this.root=null
    }

    BFS(){
        
        let currentNode=this.root
        let queue=[]
        let results=[]
        queue.push(currentNode);

        while(queue.length){
            currentNode=queue.shift() 
            results.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
             if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return results
    }
 }