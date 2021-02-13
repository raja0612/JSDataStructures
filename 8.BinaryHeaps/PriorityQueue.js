/*

   Priority Queue is a DS where each element has a priority.
   Elements with hiher priorities are served before elements
   with lower priorities.
*/

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.values.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        // take index of last elemetn that we pushed.
        let idx = this.values.length - 1 ; 
        const element = this.values[idx];

        // take parent element and compare with idx element
        // swap if newly pushed value is greater than parent element
        while(idx > 0) {
            let parentIdx = Math.floor(idx-1/2);
            let parent = this.values[parentIdx];

            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        // take the first element
        // take last element
        // place last element at starting index =0;
        // bubble down. start from 0 , and compare its children, swap with larger child

         // EDGE CASE WHEN one element is present

        const min = this.values[0]; 
        const end = this.values.pop(); 
        if(this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown()
        }  
        return min;
    }

    // bubble down. start from 0 , and compare its children, swap with larger child
    bubbleDown() {

        let idx  = 0;
        let length = this.values.length;
        const element = this.values[0];

        while(true) {
           
            let leftChildIdx = 2 * idx +  1;
            let rightChildIdx  = 2 * idx + 2;
            let leftChild, rightChild;

            let swap = null;
            

            //get left child index for swap
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            //get right child index for swap
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority > element.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;

            // swap
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            // assign index with swap index
            idx = swap;
        }


    }

}

let ER = new PriorityQueue();
ER.enqueue("Common Cold", 3);
ER.enqueue("Gun Shot Wound Cold", 1);
ER.enqueue("High Fever", 2);

console.log(ER);
console.log("First Priority", ER.dequeue());
console.log("Second Priority", ER.dequeue());
console.log("Third  Priority", ER.dequeue());



/*
BIG O of Priority Queues
    insertion   O(log N)
    Removal     O(log N)
    Seacrh      O(N)
*/