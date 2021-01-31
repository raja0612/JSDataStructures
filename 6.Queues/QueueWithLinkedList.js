class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // adding elements from begining 1->2->3
    enqueue(val) {
        var newNode  = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
     return ++this.size;
    }

    //removing from begining
    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        return temp.val;
    }
}


/*

BIG O of QUEUE


Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)

*/