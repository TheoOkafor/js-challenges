class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null
  }

  isEmpty() {
    return this.head === null;
  }

  peek() {
    return this.head;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node.next;
    } else if (this.tail === null) {
      this.tail = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    const { data } = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return data;
  }
}


const myQueue = new Queue();
console.log(myQueue.isEmpty());
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
