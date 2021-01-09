class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/* let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log(head);
console.log(head.next);
console.log(head.next.next);
*/

class SinglyLinkedList {
    constructor() {
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}


let linkedList = new SinglyLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
console.log(linkedList);
linkedList.traverse();

console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList);
