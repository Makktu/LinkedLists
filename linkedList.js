"use strict";

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node(value);
        console.log(newNode);
        let current;
        if (!this.value) {
            this.value = newNode;
        } else {
            current = this.value;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    size() {
        // return length of list
        let head = this.head;
        let count = 0;
        let temp = head;
        console.log(head);

        while (temp !== null) {
            count++;
            temp = temp.next;
        }
        return count;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const theList = new LinkedList();

theList.append(66);
theList.append(33);
theList.append(11);

console.log(theList);
console.log(theList.size());
