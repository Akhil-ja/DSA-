class node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class BTS{
    constructor(){
        this.root=null
    }

    findMin(root=this.root){
        
        let currentNode=this.root

        if(currentNode===null) return  null

            function traverse(node){


                if(node.left) return traverse(node.left);

                if(node.left === null) return node

            }

            traverse(root);
        
    }
}


function BFS(){

    let queue=[]

    let currentNode=this.root

    let result=[]


    while(queue.length){

        currentNode=queue.shift();

        result.push(currentNode.value)



    }


}