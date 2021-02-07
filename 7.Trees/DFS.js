/*
  Visiting nodes vertically untill leaf node before visiting sibling nodes.

          10
          /\
        6   15
       /\     \
      3   8    20

    DFS Pre order: [10, 6, 3, 8, 15, 20]   root left right  

    DFS Post order: [3, 8, 6, 20, 15, 10]  left right root

    DFS In order: [3, 6, 8, 10, 15, 20]    left root right o/p ascending order

*/

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

  DFSPreOrder() {
    let result = [];

    function traverse(node) {
      result.push(node.value);
      if(node.left)  traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);
    console.log("PRE ORDER",result);
    return result;
  }

  DFSPostOrder() {
    let result = [];

    function traverse(node) {
      if(node.left)  traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.value);
    }

    traverse(this.root);
    console.log("POST ORDER",result);
    return result;

  }
  DFSInOrder() {
    let result = [];

    function traverse(node) {
      node.left && traverse(node.left);
      result.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    console.log("IN ORDER",result);
    return result;
  }

}


var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();

/*
When to use BFS and DFS.

Time complexity is same for both.

Space complexity is more for BFS when tree is fully flushed
Space complexity is more for DFS when tree has long length of nodes at one side.


In Order gives you the ascending order of tree values.
Pre order can be used to reconstruct or copy to new tree because the starting node is root. 
so we can easily reconstruct the new tree.




*/

