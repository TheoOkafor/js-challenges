class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  peek() {
    return this.head;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    const { data } = this.head;
    this.head = this.head.next;
    return data;
  }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.isEmpty());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
