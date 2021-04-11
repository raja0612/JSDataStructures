class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(v) {
        if(!this.adjancencyList[v]) this.adjancencyList[v]= [];
    }

    addEdge(v1, v2) {
        this.adjancencyList[v1].push(v2);
        this.adjancencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjancencyList[v1] = this.adjancencyList[v1].filter(v => v !== v2);
        this.adjancencyList[v2] = this.adjancencyList[v2].filter(v => v !== v1);
    }

    removeVertex(v) {
        //first remove in adjancy list array
        while(this.adjancencyList[v].length) {
            let adjancencyVertex = this.adjancencyList[v].pop();
            this.removeEdge(v, adjancencyVertex);
        }
        // finally remove key in adjanceylist object
        delete this.adjancencyList[v];
    }

    dfsRecursive(start) {
        let visited = {};
        let result  = [];

        const adjancencyList = this.adjancencyList;

        function dfs(v) {
            if(!v) return null;
            visited[v] = true;
            result.push(v);

            adjancencyList[v].forEach( neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        }
        dfs(start);
        return result;
    }

    dfsIterative(start) {
        let visited = {};
        let stack = [];
        let result = [];

        stack.push(start);
        visited[start] = true;

        while(stack.length) {
            let vertex = stack.pop();
            result.push(vertex);
            this.adjancencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
     return result;
    }

    bfs(start) {
        let queue = [];
        queue.push(start);
        let result = [];
        let visited = {};
        visited[start] = true;

        while(queue.length) {
            let vertex = queue.shift();
            result.push(vertex);
            this.adjancencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "A");

console.log(graph.adjancencyList);

graph.removeVertex("E")

console.log(graph.adjancencyList);

console.log("DFS RECURSIVE *********",graph.dfsRecursive("A"));
console.log("DFS ITERATIVE *********",graph.dfsIterative("A"));
console.log("BFS *********",graph.bfs("A"));


