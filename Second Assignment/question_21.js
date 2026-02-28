//Q21. Write a JavaScript program to check whether a single linked list is empty or not. Return true otherwise false.


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }
}

let list = new LinkedList();
console.log(list.isEmpty()); 
