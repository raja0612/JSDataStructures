class Node {
    constructor(val) {
        this.val = val;
        this.left  = null;
        this.right = null;
    }
}

class BST {
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
               if(value < current.val) {
                   // if current left is null insert there
                   if(current.left === null) {
                       current.left = newNode;
                       return this;
                   } else {
                       // traverse until leaf node at left side
                       current = current.left;
                   }
               } else if(value > current.val) {
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
       
            visited.push(node.val); // add it result array
        
            if(node.left)  queue.push(node.left); // add left node to queue if exist
            if(node.right)  queue.push(node.right); // add right node to queue if exist
        }
        return visited;
    }

    DFSPreOrder() {
        let result  =[];
        function traverse(node) {
            result.push(node.val)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

        }
        traverse(this.root);
        return result;
    }

    DFSPostOrder() {
        let result = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            result.push(node.val);
        }
        traverse(this.root);
        return result;
    }

    DFSInOrder() {
        let result = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            result.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
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

console.log("********BFS************")

console.log(tree.BFS())

console.log("********DFS PRE ORDER************")
console.log(tree.DFSPreOrder());

console.log("********DFS POST ORDER************")
console.log(tree.DFSPostOrder());

console.log("********DFS IN ORDER************")
console.log(tree.DFSInOrder());