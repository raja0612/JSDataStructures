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
            counter = 0;
            while(counter !== index){
              current = current.next;
              counter++;
            }
        } else {
             console.log("SEACRCHING FROM END")
             counter = this.length - 1;
             while(counter !== index){
              currentTail = current.prev;
              counter--;
            }
        }
        return current;
    }

    set(inex, val) {
       let foundNode = get(index);
       if(foundNode) {
         foundNode.val = val;
         return true;
       }
       return false;
    }
}
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log('**********AFTER PUSH**********');
console.log(list);
list.pop();
console.log('**********AFTER POP**********');
console.log(list);