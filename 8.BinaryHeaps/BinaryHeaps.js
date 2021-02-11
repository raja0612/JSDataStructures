/*
 Binary Heaps are very similar to Binary search trees, but with some 
 different rulrs.

 In MaxBinaryHeap, parent nodes are always greater than child nodes.
 In MinBinaryHeap, parent nodes are always smaller than child nodes.

 Each parent node has exaclty two child nodes except leaf nodes.

 Binary Heaps are used to implement Priority Queues, which are very commonly used DS.
 They are also used quite a bit, with Graph traversal algorithms.

Max Binary Heap

         100
          /\
        19   36
       /\    / \
      17 3  25  1
      /\
     2  7



     Parent node at index  = n  

     left child node index = 2n + 1
     right child node index = 2n + 2

     Child node at index  = n  
     Parent node index  = floor((n-1) / 2)


*/


class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
      
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if(element <= parent) break;

           // swap element and parent
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex; // update index 
        }
    }

    // remove max element from Max Heap and min element from Min Heap. i.e first element from array(root)

    /*
        first remove index 0 element
        take last index value and place at 0 index
        bubble down (compare its children (2n+1)) (2n+2)) and select which is larger
        swap current value is larger than children
        
    */
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            // trickl or bubble down
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true) {
            let leftChildIdx  = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];

                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if(
                    (swap === null && rightChild > element) || 
                    (swap != null  && rightChild > leftChild)
                    ) {
                      swap = rightChildIdx;
                     }
            }
            if(swap === null) break;
            // swap
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            idx = swap;
        }

    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap)
heap.extractMax()

console.log(heap)



