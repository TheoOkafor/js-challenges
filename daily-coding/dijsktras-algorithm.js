/**
 * This problem was asked by Twitter.

  A network consists of nodes labeled 0 to N.
  You are given a list of edges (a, b, t),
  describing the time t it takes for a message to be sent from node a to node b.
  Whenever a node receives a message,
  it immediately passes the message on to a neighboring node, if possible.

  Assuming all nodes are connected,
  determine how long it will take for every node
  to receive a message that begins at node 0.

  For example, given N = 5, and the following edges:

  edges = [
      (0, 1, 5),
      (0, 2, 3),
      (0, 5, 4),
      (1, 3, 8),
      (2, 3, 1),
      (3, 5, 10),
      (3, 4, 5)
  ]
  You should return 9,
  because propagating the message from 0 -> 2 -> 3 -> 4 will take that much time.
 */
const edges = [
  [0, 1, 5],
  [0, 2, 3],
  [0, 5, 4],
  [1, 3, 8],
  [2, 3, 1],
  [3, 5, 10],
  [3, 4, 5]
];

/* A Queue object for queue-like functionality over JavaScript arrays. */
var Queue = function() {
  this.items = [];
};
Queue.prototype.enqueue = function(obj) {
  this.items.push(obj);
};
Queue.prototype.dequeue = function() {
  return this.items.shift();
};
Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};
/**
 * @description runs the djikstra's algorithm on a list of weighted and directed edges
 * returns an array of the weight of each edge, the index of the aray corresponding to the edge
 *
 * @param {Array} list 
 * @param {Number} origin 
 * @param {Number} end
 * 
 * @returns {Array}
 */
const doDijkstra = (list, origin, end = list.length) => {
  // Generates a weighted adjancency list from the given array
  const weightedAdjList = list.map((item, index) => {
    const matchedEdges = list.filter(elem => elem[0] === index);
    
    const result = {};
    matchedEdges.map(elem => {
      result[elem[1]] = elem[2];
    });
    return result;
  });
  
  const selectedVertices = [origin];
  const originRelaxed = Array(end).fill(null);
  const sourceList = weightedAdjList[origin];
  
  // initialize the 
  for(let i = 0; i < end; i += 1) {
    originRelaxed[i] = sourceList[i];
    if(!sourceList[i]) {
      originRelaxed[i] = Infinity;
    }
  }
  
  var queue = new Queue();
  queue.enqueue([...originRelaxed]);

  while(selectedVertices.length <= end) {
    var u = queue.dequeue();
    const tempered = [...u]
    for(let elem of selectedVertices) {
      tempered[elem] = Infinity;
    }
    const smallest = Math.min(...tempered);
    const vertex = tempered.indexOf(smallest);
    const relaxNextVertices = () => {
      const v = [...u];
      for(let i in weightedAdjList[vertex]) {
        if(weightedAdjList[vertex][i]) {
          // sums the weight of the current vertex, with the weight of the nearest edge
          const sumOfWeight = u[vertex] + weightedAdjList[vertex][i]

          // compare the current sum of weight with the pre-existing value
          // replace the existing value if the current is sum is less
          if(sumOfWeight < u[i]) {
            v[i] = sumOfWeight;
          }
        }
      }
      return v;
    }
    const relaxed = relaxNextVertices();
    queue.enqueue(relaxed);
    selectedVertices.push(vertex);
  }
  const result = queue.dequeue();
  
  return result;
}

console.log(doDijkstra(edges, 2));
