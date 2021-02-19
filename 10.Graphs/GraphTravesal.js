/*
  
Undirected Graph

             A
          /     \
         B       C
         |       |
         D-------E
          \     /
             F

      AdjancentListGraph =
       {
          "A": [B, C],
          "B": [A, D],
          "C": [A, E],
          "D": [B, E, F],
          "E": [C, D, F],
          "F": [D, E]
       } 
       
       DFS: [A, B, D, E, C, F]

       BFS: [A, B, C, D, E, F]


*/

class Graph {
    constructor() {
        this.adjancencyList = [];
    }

    addVertex(v) {
        if(!this.adjancencyList[v]) {
            this.adjancencyList[v]= []
        }
    }

    addEdge(v1, v2) {
        this.adjancencyList[v1].push(v2);
        this.adjancencyList[v2].push(v1);
    }

    DFSRecursive(v) {
        const result = [];
        const visited = {};

        const adjancencyList = this.adjancencyList;

        (function dfs(v) {
            // return null if v has no nodes
            if(!v) return null;
            
            //make vertex (v) to true
            visited[v] = true;

            //push vertex to result.
            result.push(v);

            //loop over neighbour of passing vertex
            adjancencyList[v].forEach( neighbor => {
                if(!visited[neighbor]) { // if neighbor is not visited , call dfs recursively
                    return dfs(neighbor);
                }
            });
        })(v);
     return result;
    }

    DFSIterative(v) {
        const result = [];
        const visited = {};
        const stack = [v];

        visited[v] = true;

        let currentVertex;

        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjancencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    BFSIterative(v) {
        const queue = [v];
        const result= [];
        const visited = {};

        visited[v] = true;

        let currentVertex;
        while(queue.length) {
            currentVertex = queue.shift();  // remove first element
            result.push(currentVertex);

            this.adjancencyList[currentVertex].forEach(neighbor => {

                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;

        
    }
}


let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);

console.log("**********DFS Recursive************")
console.log(g.DFSRecursive("A"));

console.log("**********DFS Iterative************")
console.log(g.DFSIterative("A"));


console.log("**********BFS Iterative************")
console.log(g.BFSIterative("A"));
