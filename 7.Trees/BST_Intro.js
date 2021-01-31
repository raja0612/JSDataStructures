class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
}

var tree = new BST();
tree.root = new Node(10);
tree.root.left = new Node(9);
tree.root.right = new Node(11);

