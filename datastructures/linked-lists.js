class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addNode(value) {
    const node = new Node(value);
    if(this.length === 0) {
      this.head = node;
      this.length += 1;
      return node;
    } else {
      let currentNode = this.head;
      while( currentNode ) {
        if(!currentNode.next) {
          currentNode.next = node;
          this.length += 1;
          return node;
        }
        currentNode = currentNode.next;
      }
    }
  }

  removeNodeAt(index) {
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;
    if(index >= this.length || index < 0) {
      throw new Error('Invalid index for this linked list');
    } else {
      if(index === 0) {
        this.head = currentNode.next;
        this.length -= 1;
        return currentNode;
      } else {
        while(currentNode.next) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex += 1;
          if(index === currentIndex) {
            previousNode.next = currentNode.next;
            this.length -= 1;
            return currentNode;
          }
        }
      }
    }
  }

  addNodeAt(index, value) {
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;
    if(index > this.length || index < 0) {
      throw new Error('Invalid index for this linked list');
    } else {
      const node = new Node(value);
      if(index === 0) {
        node.next = this.head;
        this.head = node;
      }
      while (currentNode) {
        currentIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
        if(index === currentIndex) {
          node.next = currentNode;
          previousNode.next = node;
          this.length += 1;
          return node;
        }
      }
    }
  }
}

const myLinkedList = new LinkedList();
myLinkedList.addNode(2)
myLinkedList.addNode(3)
myLinkedList.addNode(4)
console.log(myLinkedList.addNode(5));
console.log(myLinkedList);
console.log(myLinkedList.removeNodeAt(1));
console.log(myLinkedList.addNode(6));
console.log(myLinkedList.addNodeAt(4, 35));
console.log(myLinkedList);
