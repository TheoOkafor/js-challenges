const adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  []
];

class Queue {
  constructor() {
    this.entries = [];
  }

  enqueue(data) {
    return this.entries.push(data);
  }

  dequeue(){
    return this.entries.shift();
  }

  peek() {
    return this.entries;
  }

  isEmpty(){
    return this.entries.length === 0;
  }
}

const visitedVertices = [];

const doBFS = (list = [], start = 0) => {
  const bfsQueue = new Queue();
  bfsQueue.enqueue(start);

  while (!bfsQueue.isEmpty()) {
    const currentVertex = bfsQueue.dequeue();
    const neighbours = list[currentVertex];
    neighbours.forEach(element => {
      if (bfsQueue.peek().includes(element) === false
        && visitedVertices.includes(element) === false) {
        bfsQueue.enqueue(element);
      }
    });
    visitedVertices.push(currentVertex);
  }

  return visitedVertices;
}

console.log(doBFS(adjList, 6));
