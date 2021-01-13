class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = null;
  }
  push(value) {
    const newNode = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
      tail = newNode;
    }
  }
  pop() {
    if (!this.head) {
      return;
    }
    this.length--;

    if (this.head.next === null) {
      this.head.next = null;
      this.head = null;
      return;
    }
    // get last element
    let tail = this.head;
    let prev = null;
    while (tail.next !== null) {
      prev = tail;
      tail = tail.next;
    }
    prev.next = null;
    return tail;
  }
  shift() {
    if (!this.head) {
      return;
    }
    this.length--;
    if (this.head.next === null) {
      this.head.next = null;
      this.head = null;
      return;
    }
    this.head = this.head.next;
  }
  unshift(value) {
    const newNode = new Node(value);
    this.length++;
    console.log("head", this.head);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
}

const linkedList = new SinglyLinkedList();

console.log("linkedLis1t", linkedList);
linkedList.push("val1");
linkedList.push("val2");
linkedList.push("val3");
console.log("linkedLis2t", linkedList);

linkedList.pop();
linkedList.pop();
linkedList.pop();

console.log("linkedLis3t", linkedList);

linkedList.push("val2");
linkedList.push("val3");
linkedList.push("val3");

console.log("linkedLis4t", linkedList);
linkedList.shift();
console.log("linkedLis5t", linkedList);
linkedList.unshift(100);
linkedList.unshift(200);

console.log("linkedLis6t", linkedList);

linkedList.shift();
console.log("linkedLis7t", linkedList);
