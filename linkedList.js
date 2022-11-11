"use strict";

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let pointer = this.head;
            while (pointer.next !== null) {
                pointer = pointer.next;
            }
            pointer.next = newNode;
        }
        this.size++;
    }

    prepend(value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        let pointer = this.head;
        while (pointer.next) {
            // cycles through the list until it arrives at the one with 'null' for next – this is the last entry in the list
            pointer = pointer.next;
        }
        return pointer;
    }

    at(index) {
        let counter = 1;
        let pointer = this.head;
        while (counter !== index) {
            pointer = pointer.next;
            counter++;
        }
        return pointer;
    }

    pop() {
        if (this.size == 0) return;
        let counter = 1;
        let pointer = this.head;
        while (counter < this.size - 1) {
            pointer = pointer.next;
            counter++;
        }
        pointer.next = null;

        this.size--;
    }

    contains(search) {
        let foundValue = false;
        let pointer = this.head;
        let counter = 1;
        while (counter <= this.size) {
            if (pointer.value == search) {
                foundValue = true;
            }
            counter++;
            pointer = pointer.next;
        }
        return foundValue;
    }

    find(search) {
        let foundIndex = null;
        let pointer = this.head;
        let counter = 1;
        while (counter <= this.size) {
            if (pointer.value == search) {
                foundIndex = counter;
                return foundIndex;
            }
            counter++;
            pointer = pointer.next;
        }
        return foundIndex;
    }

    toString() {
        if (this.size == 0) return "NO DATA";
        let pointer = this.head;
        let counter = 1;
        let returnString = "";
        // The format should be:
        // ( value ) -> ( value ) -> ( value ) -> null
        while (counter <= this.size) {
            returnString += `( ${pointer.value} ) -> `;
            pointer = pointer.next;
            counter++;
        }
        return (returnString += "null");
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) return;
        if (index == 1) {
            this.prepend(value);
            return;
        }

        let currentNode = this.head;
        let counter = 1;
        while (currentNode) {
            if (counter == index - 1) {
                let newNode = new Node(value, currentNode.next);
                currentNode.next = newNode;
            }
            currentNode = currentNode.next;
            counter++;
        }
    }

    removeAt(index) {
        if (index < 1 || index > this.size) {
            console.error("OUT OF RANGE");
            return;
        }
        if (index == this.size) {
            this.pop();
            return;
        }

        if (index == 1) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let counter = 1;
        let currentNode = this.head;
        let previousNode;
        while (counter <= index) {
            if (index == counter) {
                previousNode.next = currentNode.next;
                this.size--;
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
    }
}

class Node {
    constructor(data, next = null) {
        this.value = data;
        this.next = next;
    }
}

let theList = new LinkedList();

theList.append(66);
theList.append(33);
theList.append(11);
theList.prepend(7777);
theList.append("TESTY");
console.log(theList.contains("TESTY"));

console.log("THE LIST ENTIRE: ", theList);
console.log("SIZE: ", theList.size);
console.log("HEAD: ", theList.head);
console.log("TAIL: ", theList.tail());
console.log("AT position 1: ", theList.at(1));
console.log("AT position 2: ", theList.at(2));
console.log("AT position 3: ", theList.at(3));
console.log("AT position 4: ", theList.at(4));
console.log("AT position 5: ", theList.at(5));
theList.pop();
console.log("NEW TAIL AFTER POP: ", theList.tail());
console.log(theList.contains(456));
console.log(theList.contains(11));
console.log(theList.contains("TESTY"));
console.log(theList.find("TESTY"));
console.log(theList.toString());
console.log("++++++++++INSERT ATs TO FOLLOW+++++++++++++++++++");
theList.insertAt(55, 1);
console.log(theList);
console.log(theList.toString());
theList.insertAt("TROUBLE", 3);
console.log(theList);
console.log(theList.toString());
theList.removeAt(5);
console.log(theList.toString());
console.log("NEW TAIL AFTER POP: ", theList.tail());
theList.removeAt(1);
console.log(theList.toString());
console.log(theList);
theList.removeAt(2);
console.log(theList.toString());
console.log(theList);
