package Graphs;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.*;
import java.util.Map;

/*

Graph Data can be stored in two ways

AdjacencyList
AdjacencyMatrix
*/

public class Graph {
    private Map<String, List<String>> map = new HashMap<>();
    
    void addVertex(String v) {
        if(!map.containsKey(v)) {
           map.put(v, new LinkedList<>());
        }
    }

    void addEdge(String v1, String v2) {
        map.get(v1).add(v2);
        map.get(v2).add(v1);
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
  
        for (String key : map.keySet()) {
            builder.append(key.toString() + ": ");
            for (String value : map.get(key)) {
                builder.append(value.toString() + " ");
            }
            builder.append("\n");
        }
        return (builder.toString());
    }

   void bfs(String vertex) {
       Map<String, Boolean> visited = new HashMap<>();
       visited.put(vertex, true);
       List<String> result = new ArrayList<>();
       Queue<String> queue = new ArrayDeque<>();
       queue.offer(vertex);

       String currentVertex = null;
       while (!queue.isEmpty()) {
           currentVertex = queue.poll();
           result.add(currentVertex);
           for (String neighbor : map.get(currentVertex)) {
               if (!visited.containsKey(neighbor)) {
                   visited.put(neighbor, true);
                   queue.offer(neighbor);
               }
           }
       }
       System.out.println("BFS"+result);
   }

   void dfs(String vertex) {

        Map<String, Boolean> visited = new HashMap<>();
        List<String> result = new ArrayList<>();
        Stack<String> stack= new Stack<>();
        stack.push(vertex);
        visited.put(vertex, true);
        String currentVertex;
        while(!stack.isEmpty()) {
            currentVertex = stack.pop();
            result.add(currentVertex);
            for (String neighbor : map.get(currentVertex)) {
                if (!visited.containsKey(neighbor)) {
                    visited.put(neighbor, true);
                    stack.push(neighbor);
                }
            }
        }
       System.out.println("DFS"+result);
   }

    public static void main(String args[]) {
        Graph graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");

        graph.addEdge("A", "B");
        graph.addEdge("B", "C");
        graph.addEdge("C", "D");
        graph.addEdge("D", "E");
        graph.addEdge("E", "A");

        System.out.println("Graph:\n" + graph.toString());

       graph.bfs("A");
        graph.dfs("A");
    }



}