/*
          10
          /\
        6   15
       /\     \
     3   8     20

     BFS: [10, 6, 15, 3, 8, 20]
*/

class BreadthFirstSearch {

    BFS() {
        var node = this.root;
        var data = [];
        var queue = [];
        queue.push(node); // push root node first

        while(queue.length) {
            node = queue.shift(); // take element from begining;
            data.push(node.value);
            if(node.left)  queue.push(node.left);
            if(node.right)  queue.push(node.right);
        }
        return data;
    }
}