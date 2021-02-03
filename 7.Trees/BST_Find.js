class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
            return this;
        }
    // start from root
       var current = this.root;
        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) {
                // if current left is null insert there
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } 
                current = current.left;
            } else if(value > current.value) {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value) {
        if(this.root === null) return false;
        var current = this.root;
        var found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current= current.right;
            } else {
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }
}

var tree = new BST();

tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(7);

console.log(tree.find(11));


/*

BIG O of BST
    Insertion - O(log n)
    Searching - O(log n)

    NOT GURANTEED :(
*/