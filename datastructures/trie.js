class Node {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
    this.count = 0;
  }
  setEnd() {
    this.isEnd = true;
  }
  incrementCount() {
    this.count +=1;
  }
  decrementCount() {
    this.count -=1;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  addInput(input, node = this.root) {
    if (input.length === 0) {
      if (node.isEnd) {
        node.incrementCount();
      }
      node.setEnd();
      return;
    } else {
      const currentElement = input[0];
      const newNode = new Node();
      if(node.children.has(currentElement)) {
        return this.addInput(input.substr(1), node.children.get(currentElement));
      } else {
        node.children.set(currentElement, newNode);
        return this.addInput(input.substr(1), node.children.get(currentElement));
      }
    }
  }

  hasItem(input = '', node = this.root) {
    // base case
    if (input.length === 1) {
      const { isEnd } = node.children.get(input[0]);
      return node.children.has(input[0]) && isEnd ;
    } else {
      if (input.length < 1) {
        return false;
      } else if (node.children.has(input[0])) {
        return this.hasItem(input.substr(1), node.children.get(input[0]));
      } else {
        return false;
      }
    }
  }

  removeItem(input, node = this.root) {
    // base case
    if (input.length === 1) {
      if (node.children.has(input[0])) {
        const endNode = node.children.get(input[0]);
        if (endNode.children.size === 0) {
          if (endNode.count > 0) {
            endNode.decrementCount();
          } else {
            node.children.delete(input[0]);
          }
        } else if (endNode.isEnd){
          if(endNode.count > 0) {
            endNode.decrementCount();
          } else {
            endNode.isEnd = false;
          }
        }
        return node;
      } else {
        throw new Error('Input not found');
      }
    } else {
      if (input.length < 1) {
        throw new Error('Invalid input')
      } else if (node.children.has(input[0])) {
        return this.removeItem(input.substr(1), node.children.get(input[0]));
      } else {
        throw new Error('Input not found');
      }
    }
  }
}

const myTrie = new Trie();
myTrie.addInput('ball')
myTrie.addInput('bat')
myTrie.addInput('beat')
myTrie.addInput('bat')
myTrie.addInput('ba')
myTrie.removeItem('ba')
myTrie.removeItem('ba')

console.log(myTrie.root.children.get('b'));
