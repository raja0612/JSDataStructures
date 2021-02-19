class Graph {
    constructor() {
        this.adjancyList = {};
    }

    // add vertex (node)
    addVertex(vertex) {
        if(!this.adjancyList[vertex]) this.adjancyList[vertex] = []
    }
    // add edges
    addEdge(vertex1, vertex2) {
        // find vertex1 key in adjancyList and add vertex2 to this array
        // find vertex2 key in adjancyList and add vertex1 to this array
       this.adjancyList[vertex1].push(vertex2);
       this.adjancyList[vertex2].push(vertex1);
    }

    //remove an edge
    removeEdge(vertex1, vertex2) {
       this.adjancyList[vertex1] = this.adjancyList[vertex1].filter( v => v !== vertex2);
       this.adjancyList[vertex2] = this.adjancyList[vertex2].filter( v => v !== vertex1);
    }

    //remove vertex
    removeVertex(vertex) {
       
        // remove vertex from all adjacent list array items
        while(this.adjancyList[vertex].length) {
            const adjancencyVertex  = this.adjancyList[vertex].pop();
            this.removeEdge(vertex, adjancencyVertex);
        }
         //remove vertex key from adjancency list
        delete this.adjancyList[vertex];
    }

    dfs() {

    }

    bfs() {
        
    }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Hyderabad");
g.addVertex("Dallas");
g.addVertex("Nashville");

g.addEdge("Tokyo", "Hyderabad");
g.addEdge("Dallas", "Nashville");
g.addEdge("Hyderabad", "Nashville");
g.addEdge("Tokyo", "Nashville");
g.addEdge("Hyderabad", "Dallas");

console.log(g);
g.removeEdge("Tokyo", "Hyderabad")

console.log(g);