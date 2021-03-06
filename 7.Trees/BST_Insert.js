/*
1. create a new node
2. starting at the root
   check if there is a root, if not - the new node becomes root node.
   if there is a root , check if the value of the new node is greater than or less
    than the value of the root.

3. If it is greater 
    check to see if there is a node to the right   
      if there is, move to that node and repeat these steps.
      if there is not, add that node as the right proprty
   
4. If it less
    check to see if there is a node to left
      if there is , move to that node and repeat theese steps
     if there is not, add that node as the left property

*/


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST  {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);

        // check if root node is exist

        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            // start from root
            var current = this.root;
            while(true) {
                // check  value is already exist
                if(value === current.value) return undefined;
               // check the value of new node is less than root
               if(value < current.value) {
                   // if current left is null insert there
                   if(current.left === null) {
                       current.left = newNode;
                       return this;
                   } else {
                       // traverse until leaf node at left side
                       current = current.left;
                   }
               } else if(value > current.value) {
                   if(current.right === null) {
                       current.right = newNode;
                       return this;
                   } else {
                      current = current.right;
                   }
               }
            }
        }
    }

    BFS() {
        var node = this.root;
        var visited = [];
        var queue = [];
        queue.push(node); // push root node first

        while(queue.length) { // until queue is empty
            node = queue.shift(); // take element from begining;
            visited.push(node.value); // add it result array
            if(node.left)  queue.push(node.left); // add left node to queue if exist
            if(node.right)  queue.push(node.right); // add right node to queue if exist
        }
        return visited;
    }
}


var tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//console.log(tree)

console.log(tree.BFS())