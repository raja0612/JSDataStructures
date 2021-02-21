class WeightedGraph {

    constructor() {
        this.adjancencyList = {};
    }

    addVertex(v) {
        if(!this.adjancencyList[v]) this.adjancencyList[v] = [];
    }

    /*

    adjancencyList = 
    {
        "A": [{"node": "B", weight: 10}]
    }
    */

    addEdge(v1, v2, weight) {
        this.adjancencyList[v1].push({node: v2, weight: weight});
        this.adjancencyList[v2].push({node: v1, weight: weight})
    }
}

/*
          A
        9/ \5
        /   \
       B -7- C

*/


let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B", 9);
g.addEdge("A", "C", 5);
g.addEdge("B", "C", 7);

console.log(JSON.stringify(g));

