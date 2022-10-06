"use strict";

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    prepend(value) {
        let newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    getSize() {
        let count = 0;
        let temp = this.head;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    tail() {
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        return temp.data;
    }

    head() {
        return this.head.value;
    }

    at(index) {
        // return node at given index
        let temp = this.head;
        let count = 1;
        let listSize = theList.getSize;
        while (temp.next != null && count != index) {
            temp = temp.next;
            count++;
        }
        if (count > listSize) return "Nothing at the index given.";
        return temp.data;
    }

    pop() {
        // remove last element from list
    }

    contains(value) {
        // returns true if the list contains the value; otherwise returns false
    }

    find(value) {
        // returns the index of the node containing the value; returns null if not found
    }

    toString() {
        // represents the list as strings, in format: (value ) -> ( value ) -> ( value ) -> null
    }

    // * 'EXTRA CREDIT' **********

    insertAt(value, index) {
        // inserts a new node with the provided value at the given index
    }

    removeAt(index) {
        // removes the node at the given index
    }

    // ***************************

    showListData() {
        let n = this.head;
        while (n != null) {
            n = n.next;
        }
    }
}

class Node {
    constructor(item, next = null) {
        this.data = item;
        this.next = next;
    }
}

const theList = new LinkedList();

theList.append(2234);
theList.append(98);
theList.append(5);
theList.append(77);
theList.prepend(23);
// theList.showListData();

console.log(theList.at(0), " <<at0");
console.log(theList.at(1), " <<at1");
console.log(theList.at(2), " <<at2");
console.log(theList.at(3), " <<at3");
console.log(theList.at(4), " <<at4");

console.log(theList.getSize());

// console.log(theList.tail());
