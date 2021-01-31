class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // inserting val at the end
    push(val) {
     let newNode  = new Node(val);

     if(!this.head){
         this.head = newNode;
         this.tail = newNode;
     } else {
         this.tail.next = newNode;
         this.tail = newNode;
     }
     this.length++;
     return this;
    }
   
    // print all elements
    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    // remove node from end(tail)
    pop() {
        if(!this.head)  return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.head == this.tail) { //if(this.length === 0 )
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //shift-- remove head element
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    //unshift -- add node to begining of list
    unshift(val) {
        let newHead = new Node(val);
        if(!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
   // get node from index is being passed
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let current = this.head;
        for(let i = 0; i <= index; i++) {
            current = current.next;
        }
        return current;
    }

    // set value at given index
    set(index, val) {
       let foundNode =  this.get(index);

       if(foundNode) {
           foundNode.val = val;
           return true
       }
       return false;
    }

   insert(index, val) {
       if(index < 0 || index > this.length) return undefined;
   
       if(index === this.length) {
            this.push(val);
            return true;
       };
       if(index === 0) return !!this.unshift(val);


       let newNode = new Node(val);

       let prev = this.get(index -1);
       let next = prev.next;
       prev.next = newNode;
       newNode.next = next;
       this.length++;
       return true;
   }

   remove(index) {
    if(index < 0 || index > this.length) return undefined;
   
    if(index === this.length-1) !!this.pop();
    if(index === 0) return !!this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
   }

   print() {
       let arr = [];
       let current = this.head;
       while(current) {
           arr.push(current.val);
           current = current.next;
       }
       console.log(arr);
   }

   reverse() {
       /*
           1. swap the head and tail
           2. create a varibale claled next
           3. create a varibale claled prev
           4. ceate a variable called current and intialize it to the head property.
           5. loop through the list
           6.  assign prev to current, current to next
       */
        
      let node = this.head;
      this.head = this.tail;
      this.tail = node;

      let prev = null;
      let next;

      for(let i = 0; i < this.length; i++) {
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
      }
      return this;
   }
}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log("***********AFTER PUSH******************");
console.log(list);
console.log("*************TRAVERSE************")
list.traverse();
console.log("*************POP************")
console.log(list.pop());
console.log(list.traverse());
console.log("*************SHIFT************")
console.log(list.shift());
console.log(list.unshift(100));
console.log(list.get(0));
console.log(list.set(0, 300));
console.log(list.get(0));
console.log(list.insert(0, 959));
console.log(list.insert(2, 1000));
console.log(list.remove(2));

console.log("***********BEFORE REVERSE ******************");
console.log(list.print());
console.log("***********AFTER REVERSE ******************");
console.log(list.reverse());
console.log(list.print());


/*
  Insertion  - O(1)
  Removal - It depends -- O(1) or O(N)
  Searching  - O(N)
  Access - O(N)

  If you dont need random access , linked list might be the option.


*/