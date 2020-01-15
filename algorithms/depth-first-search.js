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

const visitedVertices = [];

const doDFS = (list, start) => {
  const myStack = [];

  let currentVertex = start;

  while(adjList[currentVertex].length > 0) {
    myStack.push(currentVertex);
    visitedVertices.push(currentVertex);
    currentVertex = adjList[currentVertex][0];
  }
}
