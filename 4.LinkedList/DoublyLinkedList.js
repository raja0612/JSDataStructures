class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev =  null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let removedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
             this.tail = removedNode.prev;
             this.tail.next = null;
        }
        this.length--;
        return removedNode;
    }
    // Removing node from begining
    shift() {
        if(!this.head) return undefined;
        let shiftedNode = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }
    //add node to begining:
    unshift(val) {
       let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
           this.head.prev = newNode;
           newNode.next = this.head;
           this.head = newNode;
        }
        this.length++;
     return this;
    }


    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let current = this.head;
        let counter = 0;
        while(counter !== index){
          current = current.next;
          counter++;
        }
        return current;
    }

    smartGet(index) {
        if(index < 0 || index >= this.length) return undefined;
        let current, counter;
        if(index <= this.length / 2) {
            console.log("SEACRCHING FROM START");
            current = this.head;
            counter = 0;
            while(counter !== index){
              current = current.next;
              counter++;
            }
        } else {
             console.log("SEACRCHING FROM END")
             counter = this.length - 1;
             current = this.tail;
             while(counter !== index){
              current = current.prev;
              counter--;
            }
        }
        return current;
    }

    set(index, val) {
       let foundNode = get(index);
       if(foundNode) {
         foundNode.val = val;
         return true;
       }
       return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.unshift(val);
        if(index === this.length - 1) return this.push(val);

        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        let newNode = new Node(val);
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;

        return removedNode;
   
        }
        reverse() {

            let current = this.head;
            let temp;

            while(current != null) {
                let temp = current.prev;
                current.prev = current.next;
                current.next = temp;
                current = current.prev;
            }
            /* Before changing head, check for the cases like
         empty list and list with only one node */
            if (temp != null) {
                this.head = temp.prev;
            }
            return this;
        }
    print() {
        let current = this.head;
        let arr = [];
        for(let i = 0; i < this.length; i++) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.insert(0, 7);
list.insert(6, 8);
list.remove(6);
//list.reverse();
console.log(list.print());


/*
 Big O of Doubly Linked Lists
 Insertion = O(1);
 Removal = O(1);
 Searching = O(N);
 Access  - O(N)


*/