package Trees;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

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

    Queue<Node> queue = new ArrayDeque<>();
    List<Integer> result = new ArrayList<>();
    List<Integer> bfs(Node node) {

        //first add root node
        queue.offer(node);

        while(!queue.isEmpty()) {
            //poll() removes the first element from queue
            Node temp = queue.poll();

            // add it to the result list
            result.add(temp.key);
            //traverse left  and add node to the queue
            if(temp.left != null)  queue.offer(temp.left);

               //traverse right  and add node to the queue
            if(temp.right != null)  queue.offer(temp.right);
        }

     return result;
    }

}

public class BFS {
    public static void main(String args[]) {
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);
        System.out.println(tree.bfs(tree.root));
    }
}