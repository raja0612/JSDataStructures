class PriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.values.shift();
    }
}

class WeightedGraph {

    constructor() {
        this.adjancencyList = {};
    }
    addVertex(v) {
        if(!this.adjancencyList[v]) this.adjancencyList[v] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjancencyList[v1].push({node: v2, weight: weight});
        this.adjancencyList[v2].push({node: v1, weight: weight})
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = []; // to return an end


        // build up initial state
        for(let vertex in this.adjancencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        //as long as there is something to visit

        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
     
            if(smallest === finish) {
                //WE ARE DONE
                // WE NEED TO BUILD THE PATH AND RETURN

                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity) {
              // loop through each vertex adjancy list nodes
                for(let neighbor in this.adjancencyList[smallest]) {

                    //find neighbor node
                    let nextNode = this.adjancencyList[smallest][neighbor];
                    // calculate new distance to neighbour node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    if(candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - how we got to next neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }

            }
        }

        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

const path = graph.Dijkstra("A", "E");

console.log("PATH", path);
