var Node = function(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
};

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

const serialize = (root) => {
  
}

console.log(node);