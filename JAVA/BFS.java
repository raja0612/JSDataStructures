/*

       1
      / \
    2    3
  / \
 4   5

BFS :  1 2 3 4 5
*/

class Node {
    int key;
    Node left, right;

    Node(int item) {
        key = item;
        left = right = null;
    }
}

class BinaryTree {

    // root node
    Node root;

    BinaryTree() {
        root = null;
    }

}