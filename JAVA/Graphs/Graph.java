import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

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
    public String toString()
    {
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

    public static void main(String args[]) {
        Graph graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");

        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "C");
        graph.addEdge("C", "D");
        graph.addEdge("D", "E");
        graph.addEdge("E", "A");

        System.out.println("Graph:\n" + graph.toString());
    }



}