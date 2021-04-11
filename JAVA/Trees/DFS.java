/*
       1
      / \
    2    3
  / \
 4   5

 In order(Left, Root, Right) : 4 2 5 1 3

 Pre Order (root, left, right) : 1 2 4 5 3

 Post Order (left, right, root) : 4 5 2 3 1

 Algorithm Inorder(tree) 
  1. Traverse the left sub tree. i .e. call Inorder(left-subtree)
  2. Visit the root
  3. Traverse the right sub tree i.e. call Inorder(right subtree)


 Algorithm PreOrder(tree) 
  1. Visit the root
  2. Traverse the left sub tree. i .e. call PreOrder(left-subtree)
  3. Traverse the right sub tree i.e. call PreOrder(right subtree)


Algorithm PostOrder(tree) 
  1. Traverse the left sub tree. i .e. call PostOrder(left-subtree)
  2. Traverse the right sub tree i.e. call PostOrder(right subtree)
  3. Visit the root
*/
package Trees;
class Node {
    int key;
    Node left, right;

    public Node(int item) {
        key = item;
        left = right = null;
    }
}

class BinaryTree {

    // Root node of  Binary Tree
    Node root;

    BinaryTree() {
        root = null;
    }

    void inorder(Node node) {
        if(node == null)  return;

        // first recursive on the left node
        inorder(node.left);
        // print the data of node
        System.out.print(node.key+ " ");
        // second recursive on the right
        inorder(node.right);
    }

    void postOrder(Node node) {
        if(node == null) return;
        // first recursion on left
        postOrder(node.left);
        // second recuriosn on right
        postOrder(node.right);
        //then print key of node
        System.out.print(node.key + " ");
    }
    void preOrder(Node node) {

        if(node == null) return;
        //first print the data of node
        System.out.print(node.key + " ");
        // recursion on left
        preOrder(node.left);
        //recursion on right
        preOrder(node.right);

    }
}
public class DFS {
    public static void main(String args[]) {
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);

        System.out.println("********IN ORDER***********");
        tree.inorder(tree.root);
        System.out.println();

        System.out.println("********POST ORDER***********");
        tree.postOrder(tree.root);

        System.out.println();

        System.out.println("********PRE ORDER***********");
        tree.preOrder(tree.root);

    }
}